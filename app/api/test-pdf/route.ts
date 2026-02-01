import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Some test logic here
    const { searchParams } = new URL(request.url);
    const testParam = searchParams.get("test");

    if (!testParam) {
      return NextResponse.json(
        { error: "Test param required" },
        { status: 400 },
      );
    }

    // More logic
    const result = await someAsyncFunction(testParam);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Test PDF error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}

async function someAsyncFunction(param: string) {
  // Dummy function
  return param;
}
