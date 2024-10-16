import React from "react";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { SiThenorthface } from "react-icons/si";
import { SiUnderarmour } from "react-icons/si";

const Brands = () => {
  return (
    <div className="col-span-12 bg-black w-full flex flex-wrap justify-evenly items-center gap-4   ">
      <SiNike className="text-white lg:text-9xl text-4xl" />
      <SiAdidas className="text-white lg:text-9xl text-4xl" />
      <SiThenorthface className="text-white lg:text-9xl text-4xl" />
      <SiUnderarmour className="text-white lg:text-9xl text-4xl" />
    </div>
  );
};

export default Brands;
