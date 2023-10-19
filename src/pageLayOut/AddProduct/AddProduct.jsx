import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const newProduct = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(newProduct);
    fetch(
      " https://fashion-and-apparel-server-qryjejk3g-sadias-projects-d13119bc.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if ((data.insertedId = 1)) {
          Swal.fire({
            icon: "success",
            title: "added Product successfully",
            text: "Congratulations!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="mb-10">
      <h2 className="text-5xl text-blue-800 font-semibold text-center mt-5 mb-7">
        Add a Product
      </h2>
      <div className="bg-slate-100 p-5 rounded-2xl">
        <form onSubmit={handleAddProduct}>
          {/* row 1 */}
          <div className="md:flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full mr-4"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* row 2 */}
          <div className="md:flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Brand Name
                </span>
              </label>
              <label className="input-group">
                <select
                  name="brand"
                  id=""
                  className="select select-bordered w-full"
                  required
                >
                  <option value={"Adidas"}>Adidas</option>
                  <option value={"Gucci"}>Gucci</option>
                  <option value={"Levis"}>Levis</option>
                  <option value={"Nike"}>Nike</option>
                  <option value={"Zara"}>Zara</option>
                  <option value={"H&M"}>H&M</option>
                </select>
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Type
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row 3 */}
          <div className="md:flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full mr-4"
                  required
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* row 4 */}
          <div className=" mb-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-blue-800">
                  Short Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered w-full mr-4"
                />
              </label>
            </div>
          </div>

          <button className="w-full btn btn-accent bg-blue-800 text-white">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
