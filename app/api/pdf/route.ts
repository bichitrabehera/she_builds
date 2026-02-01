import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pdfUrl = searchParams.get("url");

  if (!pdfUrl) {
    return NextResponse.json({ error: "PDF URL required" }, { status: 400 });
  }

  try {
    const decoded = decodeURIComponent(pdfUrl);
    console.log("PDF URL:", decoded);

    // Redirect directly to Cloudinary URL
    return NextResponse.redirect(decoded, 302);
  } catch (error) {
    console.error("PDF redirect error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
