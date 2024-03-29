import React from "react";

function VideoBanner() {
  return (
    <div className="hompage__iframe flex justify-center">
      <iframe
        className="w-90-percent h-96"
        src="https://www.youtube.com/embed/zOnWsfucES0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBanner;
