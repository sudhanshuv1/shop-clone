import { NextResponse } from "next/server";
import { CROSS_ORIGIN_URL } from "../destination";

// Opens same-origin, then hands the tab to a third-party origin mid-flight.
export async function GET() {
  return NextResponse.redirect(CROSS_ORIGIN_URL, 302);
}
