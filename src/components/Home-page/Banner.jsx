import React from "react";

function Banner() {
  return (
    <div className="flex flex-col align-items-center">
      <img
        src="https://res.cloudinary.com/dgl5z5ozi/image/upload/v1649016381/itsy-ecom/istockphoto-1200924718-612x612_mpulct.jpg"
        style={{ minHeight: "100vh" }}
        className="flex w-full mb-24"
      />
      <div
        className="text-white bg-black flex w-80-percent p-36 justify-center align-items-center h-min absolute text-8xl opacity-90 h-full homepage-word-banner "
        style={{ top: "10rem" }}
      >
        <div>A ONE STOP SHOP FOR ALL YOUR ART NEEDS</div>
      </div>
    </div>
  );
}

export default Banner;
