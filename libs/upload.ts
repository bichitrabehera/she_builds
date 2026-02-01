import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

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
  console.log("Starting SDK upload:", file.name, file.size);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const result = await cloudinary.uploader.upload(
    `data:${file.type};base64,${buffer.toString("base64")}`,
    {
      folder: "posts",
      resource_type: "image",
    },
  );

  if (!result.secure_url) {
    throw new Error("Cloudinary upload failed: no secure_url");
  }

  return result.secure_url;
}
