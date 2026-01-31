import "dotenv/config"; // ensures env vars are loaded
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const adapter = new PrismaPg(
  new pg.Pool({
    connectionString: process.env.DATABASE_URL,
  }),
);

export const prisma = new PrismaClient({
  adapter,
});
