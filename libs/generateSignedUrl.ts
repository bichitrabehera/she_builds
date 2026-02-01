import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Return the Cloudinary URL as-is
 * The URL is already generated with proper access settings by Cloudinary during upload
 */
export function signCloudinaryUrl(
  cloudinaryUrl: string,
  expiresInSeconds: number = 3600,
): string {
  // Return the URL directly - it's already public and accessible
  // Cloudinary uploads with access_mode: "public" generate URLs that work directly
  return cloudinaryUrl;
}
