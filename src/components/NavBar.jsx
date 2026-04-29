import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Feature</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className=" text-4xl py-3 font-bold ml-5  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end  flex flex-row ">
          <FaShoppingCart size={24}></FaShoppingCart>
          <div className="flex flex-col md:flex-row gap-5 mr-5 lg:flex-row">
          <div className=" btn btn-outline rounded-4xl px-5 m-1 p-2 font-medium ml-5">Login</div>
          <a className="btn bg-linear-to-r flex justify-center from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">
            Get Started
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;