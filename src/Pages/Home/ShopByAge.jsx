import React, { useEffect, useState } from "react";

const ShopByAge = () => {
  const [childData, setChildData] = useState([]);
  useEffect(() => {
    fetch("https://my-toy-market-server.vercel.app/childData")
      .then((res) => res.json())
      .then((data) => setChildData(data));
  }, []);
  return (
    <div className="py-10 md:py-16">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Shop By Age
      </h1>

      <div className="grid grid-cols-2 gap-6 md:flex justify-center md:gap-10 my-5 items-center">
        {childData.map((el) => {
          return (
            <div className="mt-5 mx-auto md:mx-0" key={el._id}>
              <img
                className="w-24 h-24 hover:scale-105 duration-200"
                src={el.img}
                alt=""
              />
              <p className="font-bold mt-2">{el.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByAge;
