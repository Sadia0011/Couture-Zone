import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAsymmetrik } from "react-icons/fa";
import "./Navbar.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li id="sidebar">
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      {user && (
        <li id="sidebar">
          <NavLink to={"/add"}>
            <a>Add product</a>
          </NavLink>
        </li>
      )}
      {user && (
        <li id="sidebar">
          <NavLink to={"/cart"}>
            <a>My cart</a>
          </NavLink>
        </li>
      )}
      <li id="sidebar">
        <NavLink to={"/about"}>
          <a>About</a>
        </NavLink>
      </li>
      <li id="sidebar">
        <NavLink to={"/contact"}>
          <a>Contact</a>
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-slate-200 rounded-lg px-5 my-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <span className="text-4xl text-blue-500">
            <FaAsymmetrik></FaAsymmetrik>
          </span>
          CoutureZone
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>
              {user.displayName ? <h2>{user.displayName}</h2> : "unKnown"}
            </span>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div>
                <span>
                  {user.photoURL ? (
                    <>
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                          <img src={user.photoURL} alt="user" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <CgProfile className="text-4xl"></CgProfile>
                  )}
                </span>
              </div>
            </label>
            <button
              onClick={handleLogOut}
              className="btn btn-small bg-blue-800 text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-small bg-blue-800 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
