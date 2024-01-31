"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className='className="py-5 px-2  bg-emerald-300 sm:px-10  justify-between client'>
      <Link href="/">
        <h1 className="text-red-950 font-mono text-5xl text-center">
          food recipe site
        </h1>
      </Link>
    </div>
  );
}
