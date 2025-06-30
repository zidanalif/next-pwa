import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    [
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 1000,
        imageUrl: "https://placehold.co/600x400/png",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 2000,
        imageUrl: "https://placehold.co/600x400/png",
      },
      {
        id: 3,
        name: "Product 3",
        description: "Description for Product 3",
        price: 3000,
        imageUrl: "https://placehold.co/600x400/png",
      },
    ],
    { status: 200 }
  );
}
