import React, { useState, useEffect } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {

  const navigate=useNavigate();

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("addToBag");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      );
      localStorage.setItem("addToBag", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("addToBag", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div>
        <div className="flex mt-22 ml-45">
          <p className="text-gray-500">Home / </p>
          <p>My Cart</p>
        </div>

        <div className="w-[60%] ml-45 mb-30 p-8 mt-5 border-1 border-gray-300">
          <div className="flex mb-10">
            <h1 className="text-2xl font-bold mb-5">
              My Cart ({cartItems.length})
            </h1>

            <div className="relative w-60 ml-100 flex items-center border border-gray-300 rounded-md py-2 px-4">
              <FaMapMarkerAlt className="text-[#8F2B2F] text-lg mr-2" />
              <select className="w-full appearance-none bg-transparent text-gray-700 focus:outline-none">
                <option value="relevance">BridgeLabz Solutions LLP</option>
              </select>
              <FaChevronDown className="text-gray-500 ml-2" />
            </div>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((book) => (
              <div key={book.id} className="mb-20">
                <div className="flex gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-28 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{book.title}</h2>
                    <p className="text-gray-500">by {book.author}</p>
                    <div className="flex">
                      <p className="text-black font-bold">Rs. {book.price}</p>
                      <p className="text-gray-500 line-through ml-2">
                        Rs. {book.originalPrice}
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-4">
                      <button
                        className="px-3 py-1 bg-gray-200 border rounded-full"
                        onClick={() => handleQuantityChange(book.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-lg">{book.quantity || 1}</span>
                      <button
                        className="px-3 py-1 bg-gray-200 border rounded-full"
                        onClick={() => handleQuantityChange(book.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="text-gray-700 ml-4"
                        onClick={() => removeItem(book.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="mt-5 ml-155">
            <button className="px-6 py-2 bg-[#3371B5] text-white rounded cursor-pointer"
            onClick={() => setShowCustomerDetails(true)}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>

      
      {/* customer details  */}

      {!showCustomerDetails ? (
          <div className="-mt-20 w-[60%] ml-45 border border-gray-300 px-3 py-3 mb-10">
          <h2 className="text-xl font-semibold mb-4 ml-8">Address Details</h2>
          </div>
      ):(

      <div className="-mt-20 w-[60%] ml-45 border border-gray-300 px-12 py-8 mb-10">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>

        <div className="-mt-10 mb-10 ml-148">
          <button className="border border-[#A03037] text-[#A03037] px-4 py-2 rounded-[2px]">
            Add New Address
          </button>
        </div>

        <div className="w-[70%]">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[2px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[2px]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-[2px]"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City/Town
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[2px]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-[2px]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <div className="flex space-x-30 mt-2">
              {["Home", "Work", "Other"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={type}
                    className="form-radio text-red-500"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-155">
          <button className="bg-[#3371B5] text-white px-6 py-2 rounded-[2px]"
          onClick={() => setShowOrderSummary(true)}>
            CONTINUE
          </button>
        </div>
      </div>
      )}

      {/* order summary  */}

      {!showOrderSummary ? (
         <div className="w-[60%] ml-45 border border-gray-300 px-3 py-3 mb-10">
        <h2 className="text-xl font-semibold mb-4 ml-8">Order Summary</h2>
        </div>
      ):(
      <div className="w-[60%] ml-45 border border-gray-300 px-12 py-8 mb-10">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((book) => (
            <div key={book.id} className="mb-20">
              <div className="flex gap-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-20 h-28 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{book.title}</h2>
                  <p className="text-gray-500">by {book.author}</p>
                  <div className="flex">
                    <p className="text-black font-bold">Rs. {book.price}</p>
                    <p className="text-gray-500 line-through ml-2">
                      Rs. {book.originalPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="ml-155">
          <button className="bg-[#3371B5] text-white px-6 py-2 rounded-[2px] cursor-pointer" onClick={()=>navigate("/dashboard/cart/orderPlaced")}>
            CHECKOUT
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Cart;
