import React from "react";

function FeaturedBrands() {
  return (
    <div className="bg-rose-300 w-full p-16">
      <h3 className="h3 font-semibold text-center text-slate-900 mb-1">
        Featured Brands
      </h3>
      <div class="w-40-percent bg-rose-500 h-1 m-auto"></div>
      <div className="spacer-2rem"></div>
      <div className="spacer-2rem"></div>

      <div
        className="grid grid-cols-4 w-full m-auto"
        style={{ maxWidth: "60rem", gap: "1rem" }}
      >
        <div
          className="h-52 w-52 text-white rounded-2xl cursor-pointer flex justify-center align-items-center home__page__brand__logo"
          style={{
            backgroundImage: `url(
              "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649013693/itsy-ecom/Maped_logo_fr_1_haiwe1.png"
            )`,
          }}
        ></div>
        <div
          className="h-52 w-52 text-white rounded-2xl cursor-pointer flex justify-center align-items-center home__page__brand__logo"
          style={{
            backgroundImage: `url(
              "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649013620/itsy-ecom/staedtler-logo-png-transparent_fu3cyc.png"
            )`,
          }}
        ></div>
        <div
          className="h-52 w-52 text-white rounded-2xl cursor-pointer flex justify-center align-items-center home__page__brand__logo"
          style={{
            backgroundImage: `url(
              "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649013603/itsy-ecom/crayola-logo_zcmmq8.png"
            )`,
          }}
        ></div>
        <div
          className="h-52 w-52 text-white rounded-2xl cursor-pointer flex justify-center align-items-center home__page__brand__logo"
          style={{
            backgroundImage: `url(
              "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649014182/itsy-ecom/faber-castell-logo_kyzgyp.png"
            )`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default FeaturedBrands;
