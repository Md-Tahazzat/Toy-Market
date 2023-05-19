import React from "react";

const GalleryImg = () => {
  const allImages = [
    "https://i.ibb.co/sqk3Pkf/gallery-8.png",
    "https://i.ibb.co/wKyqd7K/gallery-7.png",
    "https://i.ibb.co/6sHW94r/gallery-6.png",
    "https://i.ibb.co/NSPHc1b/gallery-5.png",
    "https://i.ibb.co/khMyz7C/gallery-4.png",
    "https://i.ibb.co/g97XbJX/gallery-3.png",
    "https://i.ibb.co/G9fBNqs/gallery-2.png",
    "https://i.ibb.co/LPnz26M/gallery-1.png",
  ];
  return (
    <div>
      <h1>Some Collection</h1>
      <div>
        {allImages.map((img, index) => (
          <img key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default GalleryImg;
