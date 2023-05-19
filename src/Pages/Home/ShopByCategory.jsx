import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://my-toy-market-server-md-tahazzat.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="py-10 md:py-16">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Shop by category
      </h1>
      <Tabs className="text-center mt-10">
        <TabList className="border-b-2">
          {toys?.map((toy) => (
            <Tab key={toy._id}>{toy.category}</Tab>
          ))}
        </TabList>
        {toys?.map((toy) => {
          return (
            <TabPanel key={toy._id}>
              <div className="flex flex-col md:flex-row items-center justify-center my-10 gap-10">
                <Toy toy={toy.subCategory1}></Toy>
                <Toy toy={toy.subCategory2}></Toy>
              </div>
            </TabPanel>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
