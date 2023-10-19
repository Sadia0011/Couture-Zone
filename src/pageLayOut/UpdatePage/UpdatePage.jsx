import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const updateProduct = {
      photo,
      name,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(updateProduct);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/productsById/${loadedData._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if ((data.modifiedId = 1)) {
              Swal.fire({
                icon: "success",
                title: "updated Product successfully",
                text: "Congratulations!",
                confirmButtonText: "Cool",
              });
            }
          });
      }
    });
  };
  return (
    <div className="mb-10">
      <h2 className="text-5xl text-blue-800 font-semibold text-center mt-5 mb-7">
        Update a Product
      </h2>
      <div className="bg-slate-100 p-5 rounded-2xl">
        <form onSubmit={handleUpdateProduct}>
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
                  defaultValue={loadedData.photo}
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
                  defaultValue={loadedData.name}
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
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
                  defaultValue={loadedData.type}
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
                  defaultValue={loadedData.price}
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full mr-4"
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
                  defaultValue={loadedData.rating}
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered w-full"
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
                  defaultValue={loadedData.description}
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered w-full mr-4"
                />
              </label>
            </div>
          </div>

          <button className="w-full btn btn-accent bg-blue-800 text-white">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
