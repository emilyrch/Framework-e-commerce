// packages/product-module/components/ProductCard.tsx
import React from 'react';
import { Product } from './Product';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-blue-600">{product.description}</p>
      <p className="text-black font-bold mt-2">R$ {product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
