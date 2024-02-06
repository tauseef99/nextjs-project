import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between content-center items-center">
      <Link className="text-red-950 font-bold" href={"/"}>
        {" "}
        crud form!
      </Link>
      <Link className="bg-red-600 p-2 m-2" href="./foodlist">
        add Topic
      </Link>
    </nav>
  );
};
