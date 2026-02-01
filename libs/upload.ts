import { cloudinary } from "./cloudinary";

export default async function uploadToCloudinary(
  file: File,
  type: "image" | "pdf"
): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());

  const resourceType = type === "pdf" ? "raw" : "image";

  const result = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: resourceType,
        folder: "posts",
        access_mode: "public",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  return result.secure_url;
}
