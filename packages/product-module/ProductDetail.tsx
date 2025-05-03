import React from 'react';
import { Product } from '../catalog-module/products';

type Props = {
  product: Product;
};

export const ProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <div className="p-6 bg-blue rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-100 h-72 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-red-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold">R$ {product.price.toFixed(2)}</p>
      <p className="text-gray-600">{"poderiamos adicionar informação aqui a partir de uma struct, com fotos e textos "}</p>
    </div>
  );
};
