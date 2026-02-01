import { Post as PrismaPost } from "@prisma/client";

export type IPost = PrismaPost & {
  author?: {
    name: string;
    email: string;
  };
  registrationUrl?: string; // Optional registration link
  pdfUrl?: string; // Optional PDF upload
};

export type { PrismaPost as Post };
