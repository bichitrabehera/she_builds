import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../libs/db";
import uploadToCloudinary from "../../../libs/upload";

export const runtime = "nodejs";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    let decoded: { userId: string };
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const formData = await request.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const imageFile = formData.get("image") as File | null;
    const pdfFile = formData.get("pdf") as File | null;
    const registrationUrl = formData.get("registrationUrl") as string | null;
    const customButtonLabel = formData.get("customButtonLabel") as string | null; // ✅ Added custom button label
    const eventDate = formData.get("eventDate") as string | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    let imageUrl: string | undefined;
    let pdfUrl: string | undefined;

    // ✅ upload image
    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadToCloudinary(imageFile, "image");
    }

    // ✅ upload pdf (raw)
    if (pdfFile && pdfFile.size > 0) {
      pdfUrl = await uploadToCloudinary(pdfFile, "pdf");
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
        pdfUrl,
        registrationUrl: registrationUrl || undefined,
        customButtonLabel: customButtonLabel || undefined, // ✅ Save custom label
        eventDate: eventDate ? new Date(eventDate) : undefined,
        authorId: decoded.userId,
      },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error("Post creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: [
        { eventDate: "desc" },
        { createdAt: "desc" }
      ],
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("Fetch posts error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
