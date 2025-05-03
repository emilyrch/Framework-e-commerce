'use client';

import { ProductDetail, Product } from 'product-module';

const mockProduct: Product = {
  id: '1',
  name: 'Camisa Vintage Azul',
  description: 'Camisa clássica e confortável feita de algodão orgânico.',
  price: 79.9,
  imageUrl:'https://plus.unsplash.com/premium_photo-1668319915454-ee79c9f81f5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm91cGFzfGVufDB8MnwwfHx8MA%3D%3D'
};

export default function ProductPage() {
  return (
    <main className="min-h-screen text-black bg-blue-100 p-6 flex items-center justify-center min-h-screen text-center">
      <ProductDetail product={mockProduct} />
    </main>
  );
}


