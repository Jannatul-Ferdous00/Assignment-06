import React from "react";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const Steps_3 = () => {
  return (
    <div>
      <section className="mt-16 sm:mt-24 lg:mt-32 mb-10">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Get Started in 3 Steps
          </h1>
          <p className="mt-2.5">
            <small>
              Start using premium digital tools in minutes, not hours.
            </small>
          </p>
        </div>
      </section>

      <div className="container w-[90%] mb-16 sm:mb-24 lg:mb-36 mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card-1 */}
        <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition">
          <div className="card-body items-center text-center relative">
            {/* Badge */}
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute  top-4 right-4">
              01
            </div>

            {/* Icon */}
            <div className="hover:scale-110 transition mt-15 rounded-full bg-purple-100 p-4">
              <img src={User} alt="" className="" />
            </div>

            {/* Text */}
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p className="text-sm text-gray-400 mt-3 mb-10">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* card-2 */}
        <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition">
          <div className="card-body items-center text-center relative">
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute  top-4 right-4">
              02
            </div>

            {/* Icon */}
            <div className="hover:scale-110 transition mt-15 rounded-full bg-purple-100 p-4">
              <img src={Package} alt="" className="" />
            </div>

            {/* Text */}
            <h2 className="text-2xl font-semibold">Choose Products</h2>
            <p className="text-sm text-gray-400 mt-3 mb-10">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* card-3 */}
        <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition">
          <div className="card-body items-center text-center relative">
            {/* Badge */}
            <div className="badge bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full absolute  top-4 right-4">
              03
            </div>

            {/* Icon */}
            <div className="hover:scale-110 transition mt-15 rounded-full bg-purple-100 p-4">
              <img src={Rocket} alt="" className="" />
            </div>

            {/* Text */}
            <h2 className="text-2xl font-semibold">Start Creating</h2>
            <p className="text-sm text-gray-400 mt-3 mb-10">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps_3;
