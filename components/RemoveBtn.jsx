"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation"; //using this for reload

export const RemoveBtn = ({ id }) => {
  const router = useRouter(); //this too
  const removeTopic = async () => {
    const confirmed = confirm(" are you confirm to delete it?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); //this too
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-900">
      <HiOutlineTrash size={24} />
    </button>
  );
};
