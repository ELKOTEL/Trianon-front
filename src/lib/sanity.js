// src/sanity.js

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity client
export const client = createClient({
  projectId:"7zbsumu0", // Use environment variables for sensitive info
  dataset: "production",
  apiVersion: "2023-01-01",  // Use the latest API version
  useCdn: false,  // Set to false for live updates
});

// Initialize Image URL Builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Helper to fetch rooms
export async function fetchRooms() {
  const query = `*[_type == "room"]{
    _id,
    name,
    description,
    price,
    available,
    images,
    persons,
    bed,
    surface,
    amenities
  }`;

  return await client.fetch(query);
}

// Helper to fetch extras
export async function fetchExtras() {
  const query = `*[_type == "extras"]{
    name,
    price,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}
