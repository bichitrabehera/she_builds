import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pdfUrl = searchParams.get('url');
  
  return NextResponse.json({ 
    originalUrl: pdfUrl,
    decodedUrl: decodeURIComponent(pdfUrl || ''),
    length: pdfUrl?.length,
    tests: {
      rawPrivate: pdfUrl?.match(/\/raw\/private\/s--[^-]+--\/v\d+\/(.+)$/),
      rawPrivatePdf: pdfUrl?.match(/\/raw\/private\/s--[^-]+--\/v\d+\/(.+)\.pdf$/),
      rawUpload: pdfUrl?.match(/\/raw\/upload\/v\d+\/(.+)$/),
      imageUpload: pdfUrl?.match(/\/image\/upload\/v\d+\/(.+)\.pdf$/),
    }
  });
}
