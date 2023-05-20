import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allAddedToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return <div></div>;
};

export default MyToys;
