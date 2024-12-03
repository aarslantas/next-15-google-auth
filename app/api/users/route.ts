import { supabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("users").select("*");
    console.log("data123", data);
    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
