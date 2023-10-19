import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardBrand = ({ brand }) => {
  const { brandName, imgUrl } = brand;

  return (
    <Link to={`/products/${brandName}`}>
      <div className="relative flex flex-col bg-slate-200 rounded-lg">
        <div className="relative  mx-4 -mt-6  text-white rounded-xl ">
          <img
            src={imgUrl}
            alt="img-blur-shadow"
            className="w-full rounded-lg h-40"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 text-xl text-blue-800 font-semibold">
            {brandName}
          </h5>
        </div>
      </div>
    </Link>
  );
};

CardBrand.propTypes = {
  brand: PropTypes.object,
};
export default CardBrand;
