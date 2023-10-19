import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import BrandDetail from "../BrandDetail/BrandDetail";

const BrandDetails = () => {
  const brandData = useLoaderData();
  console.log(brandData);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  if (!brandData || brandData.length === 0) {
    return (
      <>
        <h2 className="text-4xl text-center my-5">
          No product is available of this brand
        </h2>
      </>
    );
  }
  return (
    <div>
      <h2 className="text-4xl text-blue-800 text-center font-semibold mt-5 mb-8">
        {brandData[0].brand}
      </h2>
      {brandData.length > 3 && (
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full h-[500px]">
            <img src={brandData[0].photo} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[500px]">
            <img src={brandData[1].photo} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[500px]">
            <img src={brandData[2].photo} className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[500px]">
            <img src={brandData[3].photo} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {brandData.map((data) => (
          <BrandDetail key={data._id} data={data}></BrandDetail>
        ))}
      </div>
      <div className="flex justify-center items-center my-6">
        <button
          onClick={handleGoBack}
          className="select-none rounded-lg bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BrandDetails;
