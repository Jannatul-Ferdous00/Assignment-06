import React from "react";

const Tab = ({ carts, activeTab, setActiveTab }) => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs gap-2 tabs-box justify-center mt-10 sm:mt-16 lg:mt-20 bg-transparent px-3">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-sm sm:text-lg rounded-full w-32 sm:w-40 bg-amber-300 ${activeTab === "Products" ? "bg-amber-300" : "bg-gray-200 "}`}
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-sm sm:text-lg rounded-full w-32 sm:w-40 ${activeTab === "Carts" ? "bg-amber-300" : "bg-gray-200"}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Carts")}
        />
      </div>
    </div>
  );
};

export default Tab;
