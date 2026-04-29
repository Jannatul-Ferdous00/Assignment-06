import React from "react";

const Status = () => {
  return (
    <>
      <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 py-8 sm:py-10 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-20">
          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              50k+
            </h1>
            <p className="text-sm sm:text-md text-white">Active User</p>
          </section>

          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              200+
            </h1>
            <p className="text-sm sm:text-md text-white">Premium Tools</p>
          </section>

          <section className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">
              4.9
            </h1>
            <p className="text-sm sm:text-md text-white">Rating</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Status;
