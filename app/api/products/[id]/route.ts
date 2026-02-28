import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import Product from "@/lib/db/models/Product";
import Review from "@/lib/db/models/Review";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const productId = Number(params.id);
    if (isNaN(productId)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    const product = await Product.findOne({ productId }).lean();
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const ratingAgg = await Review.aggregate([
      { $match: { productId } },
      {
        $group: {
          _id: "$productId",
          avgRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);

    const avgRating = typeof ratingAgg?.[0]?.avgRating === "number" ? ratingAgg[0].avgRating : 0;
    const reviewCount = typeof ratingAgg?.[0]?.reviewCount === "number" ? ratingAgg[0].reviewCount : 0;

    return NextResponse.json({
      product: {
        id: product.productId,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
        avgRating,
        reviewCount,
      },
    });
  } catch (error) {
    console.error("Get product error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
