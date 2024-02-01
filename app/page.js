import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen w-full homepage bg-cover"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/american-fast-food-hamburgers-french-fries-hot-dogs-fast-food-unhealthy-eating-concept-top-view_114941-2545.jpg?w=996')", // Update with your image path
      }}
    >
      <div className="w-4/5 absolute text-center top-1/2 left-1/2 trans -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="bg-teal-500 mt-6 mb-6 rounded-3xl p-20 text-2xl  ">
          Explore Food Recipe Detail
        </h1>
        <Link
          className="shadow-gray-50  bg-red-950 rounded text-xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white text-white"
          href="/types"
        >
          click Here!
        </Link>
      </div>
    </div>
  );
}
