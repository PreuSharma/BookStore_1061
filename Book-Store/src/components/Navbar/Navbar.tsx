import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false); // 👈 Profile toggle state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 👈 Track user login status
  const [userName, setUserName] = useState("Profile"); 
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const name = localStorage.getItem("fullName");

    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "User")
    }
  }, []);

  return (
    <nav className="w-full bg-[#A03037] text-white p-4 flex flex-wrap items-center justify-between fixed top-0 left-0 z-50">
      <div
        className="flex items-center space-x-2 lg:ml-40 md:ml-20"
        onClick={() => navigate("/dashboard/books")}
      >
        <FaBookOpen className="text-2xl cursor-pointer" />
        <span className="text-lg font-semibold cursor-pointer">Bookstore</span>
      </div>
      <div className="flex-1 mx-4 hidden md:block">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full pl-10 pr-4 py-2 rounded-[3px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-black bg-[#FCFCFC]"
          />
        </div>
      </div>
      <div className="flex space-x-6">
        {/* Profile - Click to Toggle Dropdown */}
        <div className="relative">
          <div
            className="flex flex-col items-center cursor-pointer lg:mr-15"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <FaUser className="text-xl" />
            <span className="text-sm">Profile</span>
          </div>

          {/* Profile Dropdown */}
          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-76 ml-20 bg-white text-black rounded-lg shadow-lg p-4 z-50">
              {isLoggedIn ? (
                <>
                  <h3 className="text-lg font-semibold">Hello, User {}</h3>
                  <hr className="my-3" />
                  <div className="text-sm text-gray-700">
                  <p
                      className="py-1 cursor-pointer hover:text-[#A03037]"
                      onClick={() => navigate("/dashboard/profile")}
                    >
                      🧑‍💼 My Profile
                    </p>
                    <p
                      className="py-1 cursor-pointer hover:text-[#A03037]"
                      onClick={() => navigate("/dashboard/orders")}
                    >
                      📦 My Orders
                    </p>
                    <p
                      className="py-1 cursor-pointer hover:text-[#A03037]"
                      onClick={() => navigate("/dashboard/wishlist")}
                    >
                      ❤️ Wishlist
                    </p>
                    <button
                      className="w-[45%] mt-2 cursor-pointer border border-[#A03037] text-[#A03037] px-4 py-2 rounded-[2px]"
                      onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.removeItem("accessToken"); // Logout
                      }}
                    >
                       Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold">Welcome</h3>
                  <p className="text-sm text-gray-600">
                    To access account and manage orders
                  </p>
                  <button
                    className="w-[50%] border border-[#A03037] text-[#A03037] py-2 rounded-lg mt-3 hover:bg-[#A03037] hover:text-white"
                    onClick={() => navigate("/")}
                  >
                    LOGIN/SIGNUP
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <div
          className="flex flex-col items-center cursor-pointer lg:mr-35"
          onClick={() => navigate("/dashboard/cart")}
        >
          <FaShoppingCart className="text-xl" />
          <span className="text-sm">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
