import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BrandDetail = ({ data }) => {
  const { _id, description, name, photo, price, rating, type } = data;
  console.log(data);

  return (
    <div>
      <div className="relative flex flex-col h-[550px] text-gray-700 bg-slate-200 shadow-md  rounded-xl bg-clip-border">
        <div className="relative h-1/2  text-white ">
          <img
            src={photo}
            alt="img-blur-shadow"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 text-xl text-blue-800 font-bold">{name}</h5>
          <p className="block ">{description}</p>
          <p className="block ">
            <span className="font-semibold text-blue-800">Price:</span> ${price}
          </p>
          <p className="block ">
            <span className="font-semibold text-blue-800">Type:</span> {type}
          </p>
          <p className="flex  items-center  ">
            {rating}{" "}
            <span className="text-xl">
              <FcRating></FcRating>
            </span>
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/details/${_id}`}>
            <button
              className="select-none mr-5 rounded-lg bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button
              className="select-none rounded-lg bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
BrandDetail.protoType = {
  brand: PropTypes.object,
};
export default BrandDetail;
