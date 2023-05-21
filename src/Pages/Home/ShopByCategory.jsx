import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "./Toy";
import Loading from "../Shared/Loading";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://my-toy-market-server-md-tahazzat.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading></Loading>;
  return (
    <div className="py-10 md:py-16">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Shop by category
      </h1>
      <Tabs className="text-center mt-15">
        <TabList className="border-b-2">
          <Tab>Sports Car</Tab>
          <Tab>Mini Fire Truck</Tab>
          <Tab>Police Car</Tab>
        </TabList>
        <TabPanel>
          <div className="flex max-w-[42rem] md:mx-auto flex-col md:flex-row items-center justify-center my-10 gap-10">
            {toys
              .filter((toy) => toy.category == "sports_car")
              .map((el, indx) => (
                <Toy key={indx} toy={el}></Toy>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex max-w-[42rem] md:mx-auto flex-col md:flex-row items-center justify-center my-10 gap-10">
            {toys
              .filter((toy) => toy.category == "mini_fire_truck")
              .map((el, indx) => (
                <Toy key={indx} toy={el}></Toy>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex max-w-[42rem] md:mx-auto flex-col md:flex-row items-center justify-center my-10 gap-10">
            {toys
              .filter((toy) => toy.category == "police_car")
              .map((el, indx) => (
                <Toy key={indx} toy={el}></Toy>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
