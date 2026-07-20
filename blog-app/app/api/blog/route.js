import { connectDB } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  console.log("Blog Get Hit");
  return NextResponse.json({
    msg: "API working",
  });
}
