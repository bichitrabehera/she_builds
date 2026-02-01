import { v2 as cloudinary } from "cloudinary";
// import "dotenv/config";

if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  throw new Error("Cloudinary env variables missing!");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadImageToCloudinary(file: File): Promise<string> {
  console.log("Starting SDK upload:", file.name, file.size, file.type);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // For PDFs, use raw resource type with private access
  const isPdf = file.type === "application/pdf";

  // Create a proper filename with extension
  const timestamp = Date.now();
  const filename = isPdf
    ? `${file.name.replace(/\.[^/.]+$/, "")}_${timestamp}`
    : `${file.name.replace(/\.[^/.]+$/, "")}_${timestamp}`;

  const uploadOptions: any = {
    folder: "posts",
    resource_type: isPdf ? "raw" : "auto",
    public_id: filename,
    type: "upload",
    overwrite: true,
    invalidate: true,
    access_mode: "public",
    use_filename: true,
    unique_filename: false,
  };

  // For PDFs, explicitly set raw resource settings
  if (isPdf) {
    uploadOptions.resource_type = "raw";
    uploadOptions.format = "pdf";
    uploadOptions.access_mode = "public";
    uploadOptions.type = "upload";
  }

  const result = await cloudinary.uploader.upload(
    `data:${file.type};base64,${buffer.toString("base64")}`,
    uploadOptions,
  );

  if (!result.secure_url) {
    throw new Error("Cloudinary upload failed: no secure_url");
  }

  console.log("Upload result:", result);

  // For PDFs, return the raw URL (will be signed when needed)
  if (isPdf) {
    console.log("PDF uploaded as raw resource:", result.secure_url);
    return result.secure_url;
  }

  return result.secure_url;
}

async function uploadPdfLocally(file: File): Promise<string> {
  const timestamp = Date.now();
  const filename = `${file.name.replace(/\.[^/.]+$/, "")}_${timestamp}.pdf`;

  // Upload to our local API
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/upload-pdf`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    throw new Error("Local PDF upload failed");
  }

  const result = await response.json();
  console.log("Local PDF upload result:", result);

  return result.url;
}

export function getPublicPdfUrl(pdfUrl: string): string {
  // If it's already a working URL, return as is
  if (!pdfUrl.includes("cloudinary")) {
    return pdfUrl;
  }

  // For Cloudinary URLs, ensure we're using the correct format
  // Try to convert to a signed URL if needed
  try {
    const url = new URL(pdfUrl);
    if (url.pathname.includes("/raw/")) {
      // For raw files, ensure proper access
      return pdfUrl;
    }
  } catch (error) {
    console.warn("Invalid PDF URL:", pdfUrl);
  }

  return pdfUrl;
}
