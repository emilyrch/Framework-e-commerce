// apps/store-ropa/src/app/product/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { products } from '../../../../../../packages/catalog-module/products';
import { ProductDetail } from 'product-module'

export default function ProductPage() {
  const params = useParams()
  const productId = params?.id as string

  const product = products.find(p => p.id === productId)

  if (!product) {
    return <p className="text-center text-red-600">Produto não encontrado</p>
  }

  return (
    <main className="min-h-screen bg-blue-100 text-black p-6 flex justify-center items-center">
      <ProductDetail product={product} />
    </main>
  )
}
