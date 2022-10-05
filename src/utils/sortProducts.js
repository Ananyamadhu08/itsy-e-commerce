export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "ALL":
      return products;
    case "HIGH_TO_LOW":
      return [...products].sort((a, b) => b.discountPrice - a.discountPrice);
    case "LOW_TO_HIGH":
      return [...products].sort((a, b) => a.discountPrice - b.discountPrice);
    default:
      return products;
  }
};
