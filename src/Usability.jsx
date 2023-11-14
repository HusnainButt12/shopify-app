import React from "react";

const Usability = () => {
  return (
    <div className="h-96 w-full flex flex-col justify-center items-center gap-4 mt-10">
      <text className="text-2xl">
        “Shopify is better than any other platform we’ve played with, and we’ve
        played with them all.”
      </text>
      <text className="font-bold text-gray-600">
        JONATHON BAYME, CEO OF THEORY11
      </text>
      <button className="rounded-md bg-[rgb(0,128,96)] p-4 px-6 text-white font-bold hover:bg-[rgb(12,43,35)]">
        Start free trial
      </button>
      <div className="h-24 w-full mt-20 flex flex-row justify-end items-center gap-8 mr-36">
        <text className="text-[rgb(0,128,96)] cursor-pointer">
          Terms of Service{" "}
        </text>
        <text className="text-[rgb(0,128,96)] cursor-pointer">
        Privacy Policy{" "}
        </text>
      </div>
    </div>
  );
};

export default Usability;
