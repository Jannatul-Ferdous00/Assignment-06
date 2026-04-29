import React, { useState } from "react";
import { toast } from "react-toastify";

const DataCard = ({ card, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);

  const handleBuy = () => {
    setIsBuy(true);

    const isFound = carts.find((item) => item.id === card.id);

    if (isFound) {
      toast.error("item already in cart");
      return;
    }

    setCarts([...carts, card]);
    toast.success("Item Added to Cart");
  };

  return (
    <div className=" shadow-2xl rounded-lg  p-4">
      <div
        className={`w-fit text-center px-3 py-1 rounded-4xl ${
          card.tagType === "popular"
            ? "bg-purple-100 text-purple-600"
            : card.tagType === "best seller"
              ? "bg-orange-100 text-orange-500"
              : card.tagType === "new"
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-500"
        }`}
      >
        {card.tag}
      </div>
      <div className="bg-gray-100 w-20 h-20 rounded-full flex justify-center items-center">
        {" "}
        <img src={card.icon} className="w-10 h-10 object-contain" alt="" />
      </div>
      <h1 className="text-2xl font-semibold mb-2.5">{card.name}</h1>

      <p className="mb-5">{card.description}</p>
      <h2 className="text-2xl font-semibold mb-4.5">
        {" "}
        ${card.price}/
        <span className="text-lg sm:text-xl font-normal">
          {card.period}
        </span>{" "}
      </h2>

      <div className="mb-5">
        {card.features.map((feature, index) => (
          <li className="list-none p-0 m-0" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </div>
      <div className="flex flex-col mt-auto">
        <button
          onClick={handleBuy}
          className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl"
        >
          {isBuy ? "Added To Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default DataCard;
