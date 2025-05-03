// next.config.ts
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'catalog-module': path.resolve(__dirname, '../../packages/catalog-module'),
      'product-module': path.resolve(__dirname, '../../packages/product-module'),

    };
    return config;
  },
};
