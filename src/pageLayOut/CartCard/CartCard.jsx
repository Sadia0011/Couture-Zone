import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CartCard = ({ cart, cartData, setCartData }) => {
  const { _id, brand, name, photo, price } = cart;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cartData.filter((cart) => cart._id != _id);
              setCartData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div class="relative flex w-full h-[300px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img src={photo} alt="image" class="object-cover w-full h-full" />
        </div>
        <div class="p-6 ">
          <h6 class="block mb-4  text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-800 uppercase">
            {brand}
          </h6>
          <h4 class="block mb-2  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p class="block mb-2  text-base antialiased font-normal leading-relaxed text-gray-700">
            ${price}
          </p>
          <Link to={`/details/${_id}`} class="inline-block">
            <button
              class="flex items-center gap-2 px-6 py-3  text-xs font-bold text-center text-blue-800 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-800/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-block bg-blue-800 text-white my-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
CartCard.propTypes = {
  cart: PropTypes.object,
};
export default CartCard;
