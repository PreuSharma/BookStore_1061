import orderplaced from "../../assets/orderplaced.png";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate=useNavigate();
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-5">
      <div className="bg-white  p-8 max-w-md text-center">
        <div className="text-4xl font-semibold text-gray-800 mb-4">
          {" "}
          <img src={orderplaced}></img>
        </div>

        <p className="text-gray-600 mt-2">
          Hurray!!! Your order is confirmed.
          <br /> The order ID is <span className="font-semibold">#123456</span>.
          Save it for further communication.
        </p>
      </div>

      <div className="bg-white border-1 border-gray-300 rounded-[5px] mt-2 w-full max-w-3xl">
        <div className="grid grid-cols-3 text-center text-gray-800 font-semibold p-3 border-b border-gray-300 bg-[#FAFAFA]">
          <div className="border-r border-gray-300">Email us</div>
          <div className="border-r border-gray-300">Contact us</div>
          <div>Address</div>
        </div>
        <div className="grid grid-cols-3 text-center text-gray-600 p-3">
          <div className="border-r border-gray-300">admin@bookstore.com</div>
          <div className="border-r border-gray-300">+91 8163475881</div>
          <div>
            42, 14th Main, 15th Cross, Sector 4, Opp to BDA Complex, Near
            Kumarakom Restaurant, HSR Layout, Bangalore 560034
          </div>
        </div>
      </div>

      <button className="mt-6 bg-[#3371B5] text-white px-6 py-2 rounded-[5px] shadow hover:bg-blue-700 transition cursor-pointer"
       onClick={()=>navigate("/dashboard/books")}>
        CONTINUE SHOPPING
      </button>
    </div>
  );
};

export default OrderPlaced;
