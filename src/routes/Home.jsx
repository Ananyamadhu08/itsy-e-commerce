import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Home-page/Banner";
import FeaturedBrands from "../components/Home-page/FeaturedBrands";
import FeaturedCategories from "../components/Home-page/FeaturedCategories";
import VideoBanner from "../components/Home-page/VideoBanner";

function Home() {
  return (
    // <!-- main -->
    <main>
      <Banner />
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <FeaturedBrands />

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <FeaturedCategories />

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <VideoBanner />

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
    // <!-- main -->
  );
}

export default Home;
