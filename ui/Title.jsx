import React from "react";

export default function Title({ text }) {
  return (
    <div className="py-4 md:py-10 ">
      <h2 className="text-2xl font-bold md:text-6xl  md:text-left uppercase">
        {text}
      </h2>
    </div>
  );
}
