"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

async function getProduct(): Promise<Product[]> {
  const res = await fetch("/api/products");
  return res.json() as Promise<Product[]>;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={400}
          />
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-lg font-semibold">
            Rp {product.price.toLocaleString()}
          </p>
        </div>
      ))}
    </>
  );
}
