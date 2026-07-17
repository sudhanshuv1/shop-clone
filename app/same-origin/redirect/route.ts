import { NextRequest, NextResponse } from "next/server";
import { SAME_ORIGIN_PATH } from "../destination";

export async function GET(request: NextRequest) {
  const target = new URL(SAME_ORIGIN_PATH, request.url);
  target.searchParams.set("via", "redirect");
  return NextResponse.redirect(target, 302);
}
