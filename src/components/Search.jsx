import React, { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../features/firebase/config";
import { useFireContext } from "../features/firebase/firebase-context";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      //   console.log(currentUser);
      console.log("not logged in");
      navigate("/login");
    }
  });
  return <div className=""></div>;
};

export default Search;
