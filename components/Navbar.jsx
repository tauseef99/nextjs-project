import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-red-500 px-8 py-8 ">
      <Link className="text-white font-bold" href={"/"}>
        tauftech
      </Link>
      <Link className="bg-orange-950 text-white p-2" href={"/addTopic"}>
        {" "}
        Add topic
      </Link>
    </nav>
  );
};

export default Navbar;
