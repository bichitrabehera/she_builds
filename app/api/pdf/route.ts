import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pdfUrl = searchParams.get("url");

  if (!pdfUrl) {
    return NextResponse.json(
      { error: "PDF URL required" },
      { status: 400 }
    );
  }

  // decode once (important)
  const decodedUrl = decodeURIComponent(pdfUrl);

  // redirect user to Cloudinary CDN
  return NextResponse.redirect(decodedUrl);
}
