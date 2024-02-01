"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname().replace("/", "");
  const currentArea = pathname.split("/")[1];
  const recipeID = pathname.split("/")[2];

  return (
    <div className="py-5 px-2 sm:px-10 bg-black flex items-center justify-between client">
      <div>
        <Link href="/">
          <h1 className="text-purple text-white font-bold text-5xl text-center">
            Food WebSite
          </h1>
        </Link>
      </div>
      {pathname && currentArea && (
        <div>
          <Link
            className="bg-blue-500 text-white p-4 text-xs sm:text-lg rounded font-bold"
            href={recipeID ? `/types/${currentArea}` : "/types"}
          >
            Back to {recipeID ? `${currentArea} recipes` : "recipe types"}
          </Link>
        </div>
      )}
    </div>
  );
}
