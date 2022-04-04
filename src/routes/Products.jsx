import React from "react";
import FilterSidebar from "../components/Product-page/FilterSidebar";
import SortProductsDropdown from "../components/Product-page/SortProductsDropdown";
import ProductPageCard from "../components/Product-page/ProductPageCard";

function Products() {
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
          <ProductPageCard />
          <ProductPageCard />
          <ProductPageCard />
          <ProductPageCard />
          <ProductPageCard />
          <ProductPageCard />
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>
    </main>
  );
}

export default Products;
