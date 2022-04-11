export const filterByCategory = (products, categoriesFilter) => {
  let filteredProducts = [];

  const noFilterSelected = Object.values(categoriesFilter).every(
    (category) => !category
  );

  console.log(noFilterSelected);

  if (noFilterSelected) return products;

  for (let category in categoriesFilter) {
    let filteredProductsByCategory = [];

    if (categoriesFilter[category]) {
      filteredProductsByCategory = products.filter(
        (product) => product.category === category
      );
    }

    filteredProducts = [...filteredProducts, ...filteredProductsByCategory];
  }

  return filteredProducts;
};

export const filterByBrand = (products, brandfilter) => {
  let filteredProducts = [];

  const noFilterSelected = Object.values(brandfilter).every(
    (brands) => !brands
  );

  if (noFilterSelected) return products;

  for (let brand in brandfilter) {
    let filteredProductsByBrands = [];

    if (brandfilter[brand]) {
      filteredProductsByBrands = products.filter(
        (product) => product.brand === brand
      );
    }
    filteredProducts = [...filteredProducts, ...filteredProductsByBrands];
  }
  return filteredProducts;
};

export const filterByRatings = (products, ratingLessThan) => {
  return products.filter((product) => product.totalStars <= ratingLessThan);
};
