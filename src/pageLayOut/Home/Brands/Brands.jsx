import React from "react";
import PropTypes from "prop-types";
import CardBrand from "./CardBrand/CardBrand";
const Brands = ({ brands }) => {
  return (
    <div className="grid grid-cols-1 gap-10 mb-5 md:grid-cols-2 lg:grid-cols-3">
      {brands.map((brand) => (
        <CardBrand key={brand.id} brand={brand}></CardBrand>
      ))}
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.array,
};
export default Brands;
