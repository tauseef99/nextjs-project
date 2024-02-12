import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export const TopicList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>topic Description</div>
        </div>
        <div className="flex gap-2">
          {/* <RemoveBtn /> */}
          <Link href={"/edittopic/123"}>
            <HiPencilAlt size={24}></HiPencilAlt>
          </Link>
        </div>
      </div>
    </>
  );
};
