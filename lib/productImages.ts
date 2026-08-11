export const productImages = {
  shilajitGold: "/images/products/shilajit-gold.jpg",
  appleCiderVinegar: "/images/products/apple-cider-vinegar.jpg",
  multivitamin: "/images/products/multivitamin.jpg",
  shilajitGoldCapsules: "/images/products/shilajit-gold-capsules.webp",
  aloeVeraFaceWash: "/images/products/aloe-vera-face-wash.webp",
  aloeVeraGel: "/images/products/aloe-vera-gel.webp",
} as const;

export const productImageList = Object.values(productImages);

/**
 * Returns a stable image for products that do not have a dedicated photo yet,
 * so the same title always renders the same picture.
 */
export function pickProductImage(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return productImageList[hash % productImageList.length];
}

export const PRODUCT_IMAGE_FALLBACK = productImages.shilajitGold;
