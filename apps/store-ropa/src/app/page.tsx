// apps/store-ropa/src/app/page.tsx

'use client'

import { products } from '@packages/catalog-module/products'  // Importando os produtos mockados
import { ProductCard } from 'product-module';  // Importando o ProductCard
import { Product } from 'product-module';     // Importando o tipo Product

// Função para exibir o catálogo de produtos
export default function Home() {
  return (
    <main className="p-6 bg-blue-500">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover mb-2 rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-white-600">{product.description}</p>
            <p className="text-black-600 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

// Mock de produto para a página de detalhes do produto
const mockProduct: Product = {
  id: '1',
  name: 'Camisa Vintage Azul',
  description: 'Camisa clássica e confortável feita de algodão orgânico.',
  price: 79.9,
  imageUrl: 'https://via.placeholder.com/600x400',
};

// Função para exibir o detalhe do produto
export function ProductPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <ProductCard product={mockProduct} />
    </main>
  );
}

import Link from 'next/link'

{products.map(product => (
  <Link href={`/product/${product.id}`} key={product.id}>
    <div className="border p-4 rounded shadow hover:bg-blue-100 cursor-pointer">
      <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover mb-2 rounded" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-white-600">{product.description}</p>
      <p className="text-black font-bold mt-2">R$ {product.price.toFixed(2)}</p>
    </div>
  </Link>
))}