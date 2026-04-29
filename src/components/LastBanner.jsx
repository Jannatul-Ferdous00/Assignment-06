import React from "react";

const LastBanner = () => {
  return (
    <div>
      <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-16 sm:mt-24 py-10">
        <div className="text-center mt-4 sm:mt-6 lg:mt-10 px-4">
          <h2 className="text-3xl sm:text-4xl text-white font-semibold">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-white text-sm sm:text-base mt-5">
            Join thousands of professionals who are already using Digitools to
            work smarter.
          </p>
          <p className="text-white text-sm">Start your free trial today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-7">
            <button className="btn rounded-4xl text-[#9514FA]">
              Explore Products
            </button>
            <button className="btn btn-outline rounded-4xl text-white hover:text-black">
              View Pricing
            </button>
          </div>
          <p className="text-white mt-2.5 mb-10">
            <small>
              14-day free trial • No credit card required • Cancel anytime
            </small>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LastBanner;
