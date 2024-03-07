"use client";
import React from "react";
import { Idb } from "../public/idb";

const Home = () => {
  const prjid = process.env.VERCEL_PROJECT_ID;
  Idb(); // Call the imported function

  return (
    <div>
      <h1>Hello Next.js!</h1>
    </div>
    <script>console.log({prjid})</script>
  );
};

export default Home;
