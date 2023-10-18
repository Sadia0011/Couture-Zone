import React from "react";
import { FaAsymmetrik } from "react-icons/fa";
const Blogs = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div class="relative flex flex-col h-[460px] mb-5  text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div className="w-full h-[160px]">
              <img src={blog.img} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div class="p-6 ">
              <span className="text-4xl text-blue-500">
                <FaAsymmetrik></FaAsymmetrik>
              </span>
              <h5 class="block mb-2 text-xl font-medium ">{blog.name}</h5>
              <p class="block text-sm ">{blog.desc}</p>
            </div>
            {/* <div class="p-6 pt-0 ">
              <a
                class="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                href="#"
              >
                <button
                  class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
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
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
