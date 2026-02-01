import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../../libs/db";
import { signCloudinaryUrl } from "../../../../libs/generateSignedUrl";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: postId } = await params;

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        author: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Generate signed URL for PDF if it exists
    const postWithSignedUrl = {
      ...post,
      pdfUrl: post.pdfUrl ? signCloudinaryUrl(post.pdfUrl) : null,
    };

    return NextResponse.json({ post: postWithSignedUrl }, { status: 200 });
  } catch (error) {
    console.error("Fetch post error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    } catch (err) {
      return NextResponse.json(
        { error: `Invalid token ${err}` },
        { status: 401 },
      );
    }

    const { id: postId } = await params;

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    // Check if post exists and user is the author
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.authorId !== decoded.userId) {
      return NextResponse.json(
        { error: "Not authorized to update this post" },
        { status: 403 },
      );
    }

    const body = await request.json();
    const { title, content, imageUrl, pdfUrl, registrationUrl } = body;

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(pdfUrl !== undefined && { pdfUrl }),
        ...(registrationUrl !== undefined && { registrationUrl }),
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
      { message: "Post updated successfully", post: updatedPost },
      { status: 200 },
    );
  } catch (error) {
    console.error("Update post error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    } catch (err) {
      return NextResponse.json(
        { error: `Invalid token ${err}` },
        { status: 401 },
      );
    }

    const { id: postId } = await params;

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    // Check if post exists and user is the author
    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.authorId !== decoded.userId) {
      return NextResponse.json(
        { error: "Not authorized to delete this post" },
        { status: 403 },
      );
    }

    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete post error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
