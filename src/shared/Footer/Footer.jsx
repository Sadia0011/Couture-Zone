import React from "react";
import { NavLink } from "react-router-dom";
import { FaAsymmetrik } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </nav>

        <aside>
          <p className="flex ">
            Copyright © 2023 - All right reserved by CoutureZone{" "}
            <span className="text-lg text-blue-500 space-y-2">
              <FaAsymmetrik></FaAsymmetrik>
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
