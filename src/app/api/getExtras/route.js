import { NextResponse } from "next/server";
import { client } from "@/sanity"; // Import Sanity client

export async function GET() {
  try {
    const rooms = await client.fetch(
      `*[_type == "extras"]{name, price, "imageUrl": image.asset->url}`
    );
       
    return NextResponse.json(rooms, { status: 200 });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json({ error: "Error fetching extras" }, { status: 500 });
  }
}
