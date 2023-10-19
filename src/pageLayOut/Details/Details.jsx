import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const details = useLoaderData();
  const { _id, brand, description, name, photo, price, rating, type } = details;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (_id) => {
    console.log("hello from details", _id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          ` https://fashion-and-apparel-server-qryjejk3g-sadias-projects-d13119bc.vercel.app/cart`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(details),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if ((data.insertedId = 1)) {
              Swal.fire(
                "Add to Cart!",
                "This product has been added.",
                "success"
              );
            }
          });

        //
      }
    });
    //
  };

  //   console.log(details);
  return (
    <div className="mb-8 bg-slate-200 p-2">
      <h2 className="text-3xl text-blue-800 text-center font-semibold mb-8 mt-5">
        Details of Brand:{brand}
      </h2>

      <div className="flex flex-col justify-center lg:gap-20 items-center md:flex-row">
        <div className="w-1/2">
          <img src={photo} className="w-full h-[500px] object-cover " alt="" />
        </div>
        <div className="text-left text-xl">
          <h2 className="text-blue-800 font-semibold text-center">{name}</h2>
          <h2 className="my-5">
            <span className="text-blue-800 font-semibold">Type:</span>
            {type}
          </h2>
          <h2>
            <span className="text-blue-800 font-semibold">Price:</span>${price}
          </h2>
          <h2 className=" my-5">
            <span className="text-blue-800 font-semibold">Rating: </span>
            {rating}
          </h2>
          <h2>
            <span className="text-blue-800 font-semibold">Description :</span>{" "}
            <br /> {description}
          </h2>
          <button
            onClick={() => handleAddToCart(_id)}
            className="btn btn-block bg-blue-800 mt-5  text-white"
          >
            Add To Cart
          </button>
          <button
            onClick={handleGoBack}
            className="btn btn-block bg-blue-800 my-5 text-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
