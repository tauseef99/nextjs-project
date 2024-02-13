import React from "react";
import { RemoveBtn } from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
// edited second time
// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/topics", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("failed to fetch new topicssssss");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("error loading topicssss", error);
//   }
// };

export const TopicsList = async () => {
  // const { topics } = await getTopics();
  return (
    <>
      <Link href={`/crudForm/addTopic`}>
        <button className="bg-sky-500 text-white p-4 m-4 rounded-xl">
          Add new Topic
        </button>
      </Link>
      {/* {topics.map((t) => ( */}
      <div
        // key={t._id}
        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
      >
        <div>
          <h2 className="font-bold text-2xl">
            {/* {t.title} */}
            Title
          </h2>
          <div>
            {/* {t.description} */}
            Description
          </div>
        </div>
        <div className="flex gap-2 ">
          <RemoveBtn />
          <Link href={``}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};
