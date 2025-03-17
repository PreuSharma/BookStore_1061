// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "../components/Login/Login";
// import Signup from "../components/Signup/Signup";
// import Home from "../components/Home/Home";


// const RoutingModule: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />


//       </Routes>
//     </Router>
//   );
// };

// export default RoutingModule;












import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import BookContainer from "../components/BookContainer/BookContainer";
import BookDetail from "../components/BookDetail/BookDetail";
import Cart from "../components/Cart/Cart";
import ForgetPassword from "../components/Login/ForgetPassword";
import Wishlist from "../components/Wishlist/Wishlist";
import OrderPlaced from "../components/OrderPlaced/OrderPlaced";
import Profile from "../components/Profie/Profile";
import Orders from "../components/Orders/Orders";


const RoutingModule: React.FC = () => {
    const route = createBrowserRouter([
        {
          path: "",
          element:<Login />,
        },
        {
          path: "/forgetpassword",
          element:<ForgetPassword />,
        },
        {
          path: "/signup",
          element:<Signup />,
        },
        {
          path: "/dashboard",
          element: (
                <Dashboard />
        ),
        children: [
            {
              path: "books",
              element: <BookContainer />,
            },
            {
              path: "books/:id",
              element: <BookDetail />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "cart/orderPlaced",
              element: <OrderPlaced />,
            },
            
            {
              path: "wishlist",
              element: <Wishlist />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
          ],
        },
      ]);
    
      return <RouterProvider router={route} />;
};

export default RoutingModule;