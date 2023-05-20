import React from "react";
import Banner from "./Banner";
import GalleryImg from "./GalleryImg";
import ShopByCategory from "./ShopByCategory";
import ShopByAge from "./ShopByAge";
import CustomerSaying from "./CustomerSaying";
import updateTitle from "../../components/PrivateRoute/Utilities/UpDateTitle";

const Home = () => {
  updateTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <GalleryImg></GalleryImg>
      <ShopByAge></ShopByAge>
      <ShopByCategory></ShopByCategory>
      <CustomerSaying></CustomerSaying>
    </div>
  );
};

export default Home;
