import React from "react";
import Banner from "./Banner";
import GalleryImg from "./GalleryImg";
import ShopByCategory from "./ShopByCategory";
import ShopByAge from "./ShopByAge";
import CustomerSaying from "./CustomerSaying";
import updateTitle from "../../components/PrivateRoute/Utilities/UpDateTitle";
import { useNavigation } from "react-router-dom";
import Loading from "../Shared/Loading";

const Home = () => {
  updateTitle("Home");
  const navigation = useNavigation();
  if (navigation?.state === "loading") return <Loading></Loading>;
  return (
    <>
      <Banner></Banner>
      <GalleryImg></GalleryImg>
      <ShopByAge></ShopByAge>
      <ShopByCategory></ShopByCategory>
      <CustomerSaying></CustomerSaying>
    </>
  );
};

export default Home;
