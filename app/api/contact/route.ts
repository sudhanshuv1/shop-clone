import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongoose";
import ContactMessage from "@/lib/db/models/ContactMessage";
import { getAuthUser } from "@/lib/auth";
import { validateContactInput } from "@/lib/contact";

// Public: anyone (including logged-out visitors) can send a contact message.
export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const result = validateContactInput(body);
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await dbConnect();
    const created = await ContactMessage.create(result.value);

    return NextResponse.json(
      {
        message: {
          id: created._id.toString(),
          name: created.name,
          email: created.email,
          subject: created.subject,
          message: created.message,
          status: created.status,
          createdAt: created.createdAt.toISOString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create contact message error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Admin-only: list submitted contact messages.
export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser(request);
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    if (user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await dbConnect();
    const messages = await ContactMessage.find({}).sort({ createdAt: -1 }).lean();

    const mapped = messages.map((m) => ({
      id: m._id.toString(),
      name: m.name,
      email: m.email,
      subject: m.subject,
      message: m.message,
      status: m.status,
      createdAt: m.createdAt?.toISOString() || "",
    }));

    return NextResponse.json({ messages: mapped });
  } catch (error) {
    console.error("Get contact messages error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
