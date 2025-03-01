import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity"; // Import Sanity client

export async function GET() {
  try {
    const rooms = await client.fetch(
      `*[_type == "room"]{
        _id, name, description, price, available, images, persons, bed, surface, amenities
      }`
    );
    
    return NextResponse.json(rooms, { status: 200 });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return NextResponse.json({ error: "Error fetching rooms" }, { status: 500 });
  }
}
