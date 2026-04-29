import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  console.log(carts);

  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0);

  const handleCart = () => {
    setCarts([]);
    toast("proceed to checkout");
  };

  const handleRemove = (cart) => {
    console.log(cart);
    const filteredArray = carts.filter((c) => c.id !== cart.id);
    setCarts(filteredArray);
    toast.success("item removed");
  };

  return (
    <div className="w-[92%] lg:w-[70%] mx-auto container rounded mt-10 sm:mt-14 lg:mt-20">
      <h1 className="text-2xl sm:text-3xl font-semibold">Your Cart</h1>

      {carts.length === 0 ? (
        <div>
          <div className=" flex flex-col justify-center items-center mt-10 h-48 bg-amber-50 rounded-lg">
            <FaShoppingCart className="w-20 h-20" />
            <p className="text-center ">Your Cart is empty</p>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="space-y-5">
            {carts.map((cart) => (
              <div className=" border rounded-xl p-5 mt-5" key={cart.id}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-25 h-25 flex justify-center items-center rounded-full bg-amber-100 object-contain">
                      <img src={cart.icon} className="w-10 h-10" alt="" />
                    </div>
                    <h1 className="text-xl sm:text-2xl font-semibold ">
                      {cart.name}
                    </h1>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-medium">
                    ${cart.price}/
                    <span className="text-sm sm:text-md font-normal">
                      {cart.period}
                    </span>{" "}
                  </h1>

                  <div className="lg:ml-auto">
                    <button
                      onClick={() => handleRemove(cart)}
                      className="text-red-50 btn btn-error"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <div className="text-2xl font-medium">Total:</div>
            <div className="text-2xl font-medium">${totalPrice}</div>
          </div>
          <button
            onClick={handleCart}
            className="btn w-full rounded-4xl mt-8 sm:mt-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base sm:text-xl font-normal text-white"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
