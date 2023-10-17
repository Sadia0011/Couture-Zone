import React from "react";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="text-center max-w-3xl mb-6  mt-10  mx-auto">
        <h1 className="text-2xl my-6 font-bold">
          Unveil the Latest Trends,
          <br />
          <span className="text-blue-800">Unleash Your Inner Fashionista.</span>
        </h1>
        <p className="text-sm mb-20">
          Indulge in a world of luxury and elegance with our handpicked
          selection of premium apparel and accessories. Redefine your fashion
          narrative with our timeless classics and modern statement pieces.
        </p>
      </div>
      <Brands brands={brands}></Brands>

      <div className="text-center max-w-3xl mb-6 mt-10 mx-auto">
        <h1 className="text-2xl my-6 font-bold">
          Discover Your Signature Look,
          <br />
          <span className="text-blue-800">Define Your Fashion Story.</span>
        </h1>
        <p className="text-sm mb-20">
          Indulge in a world of luxury and elegance with our handpicked
          selection of premium apparel and accessories. Redefine your fashion
          narrative with our timeless classics and modern statement pieces.
        </p>
      </div>
    </div>
  );
};

export default Home;
