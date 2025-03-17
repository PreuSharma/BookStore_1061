import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgetPassword: React.FC = () => {
    const navigate=useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <div>
      <nav className="w-full bg-[#A03037] text-white p-4 flex flex-wrap items-center justify-between fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-2 lg:ml-40 md:ml-20">
          <FaBookOpen className="text-2xl cursor-pointer" />
          <span className="text-lg font-semibold cursor-pointer">
            Bookstore
          </span>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

        <div>
          <h2 className="text-2xl font-bold text-center text-gray-700 -mt-20">
            Forgot Your Password?
          </h2>
        </div>

        <div className="border-1 border-gray-400 rounded-[2%] px-10  w-[27%]">
          <p className="text-sm text-center text-gray-500 mt-8">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
          <form onSubmit={handleSubmit} className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Id
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border border-gray-400 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full mt-4 py-2 bg-[#A03037] text-white font-semibold rounded-[5px] hover:bg-red-700 transition cursor-pointer"
            >
              Reset Password
            </button>
          </form>

          <div className="-ml-[39px] w-[125%] rounded[5px] bg-[#E4E4E4] mt-10 text-center">
          <button className="py-8 text-gray-700 font-semibold cursor-pointer " onClick={()=>navigate("/signup")}>
            CREATE ACCOUNT
          </button>
        </div>

        
        </div>

      </div>



    </div>
  );
};

export default ForgetPassword;

// <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-center text-gray-700">
//             Forgot Your Password?
//           </h2>
//           <p className="text-sm text-center text-gray-500 mt-2">
//             Enter your email address and we&apos;ll send you a link to reset
//             your password.
//           </p>
//           <form onSubmit={handleSubmit} className="mt-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email Id
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="w-full mt-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
//             >
//               Reset Password
//             </button>
//           </form>
//           <div className="mt-4 text-center">
//             <button className="w-full py-2 text-gray-700 border rounded-lg hover:bg-gray-200 transition">
//               CREATE ACCOUNT
//             </button>
//           </div>
//         </div>
//      </div>
