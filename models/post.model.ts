import { Post as PrismaPost } from "@prisma/client";

export type IPost = PrismaPost & {
  author?: {
    name: string;
    email: string;
  };
};

export { PrismaPost as Post };
