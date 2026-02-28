import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Product from "@/lib/db/models/Product";
import Review from "@/lib/db/models/Review";
import { products as seedData } from "@/lib/products";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const q = searchParams.get("q");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (q) {
      const regex = new RegExp(q, "i");
      filter.$or = [
        { title: regex },
        { description: regex },
        { category: regex },
      ];
    }

    const products = await Product.find(filter).sort({ productId: 1 }).lean();

    const productIds = products.map((p) => p.productId);
    const ratingAgg = productIds.length
      ? await Review.aggregate([
          { $match: { productId: { $in: productIds } } },
          {
            $group: {
              _id: "$productId",
              avgRating: { $avg: "$rating" },
              reviewCount: { $sum: 1 },
            },
          },
        ])
      : [];

    const ratingByProductId = new Map<number, { avgRating: number; reviewCount: number }>();
    for (const r of ratingAgg) {
      if (typeof r?._id === "number") {
        ratingByProductId.set(r._id, {
          avgRating: typeof r.avgRating === "number" ? r.avgRating : 0,
          reviewCount: typeof r.reviewCount === "number" ? r.reviewCount : 0,
        });
      }
    }

    const mapped = products.map((p) => {
      const rating = ratingByProductId.get(p.productId);
      return {
        id: p.productId,
        title: p.title,
        description: p.description,
        price: p.price,
        image: p.image,
        category: p.category,
        avgRating: rating?.avgRating ?? 0,
        reviewCount: rating?.reviewCount ?? 0,
      };
    });

    return NextResponse.json({ products: mapped });
  } catch (error) {
    console.error("Get products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json();

    if (action !== "seed") {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    await dbConnect();

    for (const product of seedData) {
      await Product.findOneAndUpdate(
        { productId: product.id },
        {
          productId: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          category: product.category,
        },
        { upsert: true }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${seedData.length} products`,
    });
  } catch (error) {
    console.error("Seed products error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
