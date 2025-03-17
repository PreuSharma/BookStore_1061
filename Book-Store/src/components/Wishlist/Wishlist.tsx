// import React, { useState } from "react";
// import { books } from "../BookCard/Books.tsx";
// import { FaTrash } from "react-icons/fa";
// import wishlist from "../../assets/wishlist.png";
// import { useNavigate } from "react-router-dom";


// const Wishlist: React.FC = () => {
//     const navigate=useNavigate();
//     const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual authentication logic
//   const [cartItems, setCartItems] = useState(
//     books.map((book) => ({ ...book, quantity: 1 }))
//   );

//   const removeItem = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <div>

// {isLoggedIn ? (
//         <>

//       <div className="flex mt-22 ml-45">
//         <p className="text-gray-500">Home / </p>
//         <p>My Wishlist</p>
//       </div>

//       <div className="w-[70%] ml-45 mb-62 mt-5 border-1 border-gray-300">
//         <div className="w-full flex mb-10 border-b border-gray-300 bg-gray-200">
//             <h1 className="text-2xl font-bold mb-5 ml-10 mt-5">
//               My Wishlist ({cartItems.length})
//             </h1>
//         </div>


//         {cartItems.length === 0 ? (
//           <p className="text-gray-500 ml-10 mb-10">Your wishlist is empty.</p>
//         ) : (
//           cartItems.map((book) => (
//             <div key={book.id} className="mb-20 ml-10">
//               <div className="flex gap-4">
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-20 h-28 object-cover"
//                 />

//                 <div>
//                   <div>
//                     <h2 className="text-lg font-semibold">{book.title}</h2>
//                     <p className="text-gray-500">by {book.author}</p>
//                     <div className="flex">
//                       <p className="text-black font-bold">Rs. {book.price}</p>
//                       <p className="text-gray-500 line-through ml-2">
//                         Rs. {book.originalPrice}
//                       </p>
//                     </div>
//                   </div>

//                   <div className=" ml-200 -mt-15">
//                     <button
//                       className="text-gray-700 cursor-pointer"
//                       onClick={() => removeItem(book.id)}
//                     >
//                       <FaTrash/>
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))
//         )}

        
//       </div>
//       </>
//       ) : (
//         <div className="flex flex-col items-center justify-center min-h-screen">
//           <h2 className="text-2xl font-bold">PLEASE LOG IN</h2>
//           <p className="text-gray-500">Login to view items in your wishlist.</p>
//           <img
//             src={wishlist}
//             alt="Wishlist Login Prompt"
//             className="w-32 h-32 mt-4"
//           />
//           <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded cursor-pointer" onClick={()=>navigate("/")}>
//             LOGIN/SIGNUP
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Wishlist;





































import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import wishlistImage from "../../assets/wishlist.png";

const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<
    { id: number; title: string; author: string; price: number; image: string; originalPrice: number }[]
  >([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual authentication logic

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeItem = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div className="flex mt-22 ml-45">
            <p className="text-gray-500">Home / </p>
            <p>My Wishlist</p>
          </div>

          <div className="w-[70%] ml-45 mb-62 mt-5 border-1 border-gray-300">
            <div className="w-full flex mb-10 border-b border-gray-300 bg-gray-200">
              <h1 className="text-2xl font-bold mb-5 ml-10 mt-5">
                My Wishlist ({wishlist.length})
              </h1>
            </div>

            {wishlist.length === 0 ? (
              <p className="text-gray-500 ml-10 mb-10">Your wishlist is empty.</p>
            ) : (
              wishlist.map((book) => (
                <div key={book.id} className="mb-20 ml-10">
                  <div className="flex gap-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-20 h-28 object-cover"
                    />

                    <div>
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

                      <div className=" ml-200 -mt-15">
                        <button
                          className="text-gray-700 cursor-pointer"
                          onClick={() => removeItem(book.id)}
                        >
                          <FaTrash/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-300 mt-10 -ml-10"></div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold">PLEASE LOG IN</h2>
          <p className="text-gray-500">Login to view items in your wishlist.</p>
          <img
            src={wishlistImage}
            alt="Wishlist Login Prompt"
            className="w-32 h-32 mt-4"
          />
          <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded cursor-pointer" onClick={()=>navigate("/")}>
            LOGIN/SIGNUP
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;