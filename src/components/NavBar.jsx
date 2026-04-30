import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ carts }) => {
  const cartCount = carts.length;
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 lg:px-8">
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
          <a className="text-xl sm:text-3xl lg:text-4xl py-3 font-bold ml-1 sm:ml-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
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

        <div className="navbar-end flex flex-row items-center gap-2 sm:gap-4">
          <div className="relative">
            <FaShoppingCart size={24}></FaShoppingCart>
            <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] leading-5 text-center font-semibold">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 mr-1 sm:mr-3">
            <div className="btn btn-outline rounded-4xl px-3 sm:px-5 font-medium hidden sm:flex">
              Login
            </div>
            <a className="btn btn-sm sm:btn-md bg-linear-to-r flex justify-center from-[#4F39F6] to-[#9514FA] text-white rounded-4xl px-3 sm:px-5 text-xs sm:text-base">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
