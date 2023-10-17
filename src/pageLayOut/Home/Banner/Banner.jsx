import React from "react";
import { SiZara, SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
const Banner = () => {
  return (
    <div className="hero  bg-slate-200 rounded-lg">
      <div className="flex justify-center items-center flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/yQWqRLB/GUCCI-1.jpg"
          className="w-2/6 rounded-lg "
        />
        <div className="p-10 text-center">
          <h1 className="text-4xl font-bold text-center">
            Elevate Your Style,
            <br />
            <span className="text-blue-800">Embrace Your Confidence.</span>
          </h1>
          <p className="py-6">
            Explore our diverse range of designer labels and wardrobe
            essentials, meticulously crafted to reflect your individuality.
            Experience the art of fashion through our premium quality and
            trendsetting designs.
          </p>
          <div className="flex justify-center items-center gap-7 text-blue-800  ">
            <SiZara className="text-4xl"></SiZara>
            <SiNike className="text-4xl"></SiNike>
            <SiAdidas className="text-4xl"></SiAdidas>
            <h2 className="text-base font-semibold">GUCCI</h2>
            <h2 className="text-base font-semibold">H&M</h2>
            <h2 className="text-base font-semibold">LEVI'S</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
