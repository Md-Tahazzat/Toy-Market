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
    "https://i.ibb.co/GQZ2mm7/gellery-10.png",
  ];
  return (
    <div className="py-10 md:py-16 ">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Toys Gallery
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center md:gap-5 lg:px-56">
        {allImages.map((img, index) => (
          <img
            className="w-full my-10 lg:my-5 md:max-w-[16rem] lg:h-[16rem] rounded-lg border shadow-2xl hover:scale-105 duration-300"
            key={index}
            src={img}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryImg;
