"use client";
import React from "react";
import { Idb } from "../public/idb";

const Home = () => {
  Idb(); // Call the imported function

  return (
    <div>
      <h1>Hello Next.js!</h1>
    </div>
  );
};

export default Home;
