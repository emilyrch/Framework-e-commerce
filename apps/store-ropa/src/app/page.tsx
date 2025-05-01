// apps/store-ropa/src/app/page.tsx
'use client'

import { products } from '@packages/catalog-module/products'

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Brechó IC</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover mb-2 rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
