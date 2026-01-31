import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "../../../../libs/db";

export async function POST(request: NextRequest) {
  try {
    console.log("Registration request received");
    const { name, email, password } = await request.json();
    console.log("Request data:", { name, email, password: "***" });

    if (!name || !email || !password) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 },
      );
    }

    console.log("Checking for existing user");
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    console.log("Existing user:", existingUser);

    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    console.log("Hashing password");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Creating user");
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User created successfully");

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
