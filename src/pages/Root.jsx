import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";

const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
