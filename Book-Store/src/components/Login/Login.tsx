import React, { useState } from "react";
import SignupImg from "../../assets/signupImg.png";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../../utility/User";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 const [emailError, setEmailError] = useState<string | null>(null);
const [passwordError, setPasswordError] = useState<string | null>(null);
  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e: React.FormEvent) => {
    let valid = true;
    e.preventDefault();
    console.log("Form Data:", formData);

    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    

    if (!formData.email.length) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      setEmailError("Enter a valid email address");
      valid = false;
    }

    if (!formData.password.length) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one special character"
      );
      valid = false;
    }

    if (valid) {
      loginApiCall(formData)
        .then((res) => {
          if (res?.success && res.result) {
            // After successful login
          localStorage.setItem("accessToken", res.result.accessToken);

            console.log("User login successfully:", res);
            toast.success("Login Successful");
            setTimeout(() => navigate("/dashboard/books"), 2000);
          } else {
            toast.error(res?.message || "Login failed! Try again.");
          }
        })
        .catch((err) => {
          console.error("Login failed:", err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/7">
        {/* Left Side */}
        <div className="w-1/2 h-90  flex flex-col items-center justify-center p-8 bg-gray-100">
          <img
            src={SignupImg}
            alt="Online Book Shopping"
            className="w-48 h-48 mb-6"
          />
          <h2 className="text-xl font-semibold mt-8">ONLINE BOOK SHOPPING</h2>
        </div>

        {/* Right Side */}
        <div className="w-1/4 p-15 absolute top-[-30px] left-[50%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-49 ml-40 h-125 min-h-[250px] flex flex-col justify-center   bg-white shadow-lg rounded-lg ">
          <div className="flex justify-between mb-15">
          <button
              onClick={() => navigate("/")} // Navigate to signup page
              className="text-1xl font-bold text-black border-b-2 border-red-500 hover:text-black transition-all"
            >
              LOGIN
            </button>
             
             <button
              onClick={() => navigate("/signup")} // Navigate to signup page
              className="text-1xl font-semibold text-gray-400 hover:text-black transition-all"
            >
              SIGNUP
            </button>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <span className="text-xs">Email Id</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-1 border rounded focus:outline-none ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {emailError && (
                <span className="text-[10px] text-red-500">{emailError}</span>
              )}

            </div>
            <div className="mb-4 relative">
            <span className="text-xs">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-1 border rounded focus:outline-none ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {passwordError && (
                <span className="text-[10px] text-red-500">
                  {passwordError}
                </span>
              )}
              <div className="text-[12px] ml-36 cursor-pointer" onClick={()=>navigate("/forgetPassword")}>Forget Password ?</div>
            </div>

            <button
              type="submit"
              className="w-full p-1 text-white bg-red-600 rounded hover:bg-red-700 " 
            >
              Login
            </button>

            <div className="mb-4 relative">
            <div className="flex items-center my-4">
              <div className="w-full border-b border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="w-full border-b border-gray-300"></div>
            </div>
            </div>

            <div className="flex gap-10 ">
              <button
                type="submit"
                className="w-full p-3 2 text-white bg-gray-300 rounded hover:bg-blue-500 "
              >
                Facebook
              </button>

              <button
                type="submit"
                className="w-full p-3 2 text-white bg-gray-600 rounded hover:bg-blue-500 "
              >
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
