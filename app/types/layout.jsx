import React from "react";

function layout({ children }) {
  return (
    <>
      <h2 className="bg-rose-500 font-mono text-white text-center text-lg">
        Details of Food
      </h2>
      {children}
    </>
  );
}

export default layout;
