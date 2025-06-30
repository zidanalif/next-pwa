import Image from "next/image";

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

export default async function Home() {
  const products = await getProduct();

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
