import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://gadhop.herokuapp.com/my?uid=${user.uid}`)
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);
  return [myProducts, setMyProducts];
};

export default useMyProducts;
