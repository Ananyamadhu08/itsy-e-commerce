export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "ALL":
      return products;
    case "HIGH_TO_LOW":
      return products.sort((a, b) => b.price - a.price);
    case "LOW_TO_HIGH":
      return products.sort((a, b) => a.price - b.price);
    default:
      return products;
  }
};
