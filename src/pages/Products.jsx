import React from "react";
import FilterSidebar from "../components/Product-page/filters/FilterSidebar";
import SortProductsDropdown from "../components/Product-page/SortProductsDropdown";
import ProductPageCard from "../components/Product-page/ProductPageCard";
import { useProduct } from "../contexts/providers/ProductProvider";
import { useFilters } from "../contexts/providers/FiltersProvider";

function Products() {
  const {
    productState: { products },
  } = useProduct();

  const { sortedProducts } = useFilters();

  return (
    <main
      className="relative w-full justify-end flex"
      style={{ top: "5rem", minHeight: "100vh" }}
    >
      <FilterSidebar />

      <div className="product__display__container">
        <SortProductsDropdown />

        <div
          className="grid grid-cols-3  mr-20"
          style={{ gap: "4rem", marginTop: "-2rem" }}
        >
          {sortedProducts &&
            sortedProducts.map((product, i) => (
              <ProductPageCard product={product} key={i} />
            ))}
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>
    </main>
  );
}

export default Products;
