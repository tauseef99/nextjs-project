import React from "react";
import { Navbar } from "@/components/Navbar";

function layout({ children }) {
  return (
    <>
      <h2 className="bg-rose-500 font-mono text-white text-center text-lg">
        Perform Crud Operation
      </h2>
      <div className="max-w-3xl max-auto bg-emerald-300 ">
        {/* <Navbar /> */}
      </div>
      {children}
    </>
  );
}

export default layout;
