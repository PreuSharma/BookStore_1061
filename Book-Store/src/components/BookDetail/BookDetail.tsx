import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchBooks, Book }  from "../BookCard/Books.tsx";

import Img2 from "../../assets/img-2.png";
import { useNavigate } from "react-router-dom";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback.tsx";




const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate=useNavigate();
  const [book, setBook] = useState<Book | null>(null);

  const [quantity, setQuantity] = useState(0);
  
  

  
  useEffect(() => {
    fetchBooks()
      .then((data) => {
        const foundBook = data.find((b:Book) => b.id === parseInt(id || ""));
        setBook(foundBook || null);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) {
    return <p className="text-center text-gray-500 mt-10">Book not found</p>;
  }


  const handleAddToWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

    // Agar book pehle se wishlist me nahi hai, tab hi add karega
    if (!wishlist.some((item: Book) => item.id === book.id)) {
      wishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };






  const handleAddToBag = () => {
    const storedaddToBag = localStorage.getItem("addToBag");
    const addToBag = storedaddToBag ? JSON.parse(storedaddToBag) : [];

    // Agar book pehle se cart me nahi hai, tab hi add karega
    if (!addToBag.some((item: Book) => item.id === book.id)) {
      addToBag.push(book);
      localStorage.setItem("addToBag", JSON.stringify(addToBag));
    }
  };










  return (
    <div className="mt-23 lg:mt-23 ml-45 mb-13 md:mt-23 ">
      <div className="flex -ml-40 mb-10 md:-ml-20">
        <p className="text-gray-500">Home / </p>
        <p>Book({id})</p>
      </div>

      <div className="-ml-40 md:-ml-20 flex flex-col md:flex-row gap-10">
        {/* left  */}
        <div>
          <div className="flex items-center">
            <div className="flex flex-col -mt-64">
              <div className="w-14 h-18 border-1 border-[rgb(185,184,184)] flex justify-center items-center">
                <img
                  src={book.image}
                  alt="thumb-1"
                  className="w-12 h-16 cursor-pointer"
                />
              </div>
              <div className="w-14 h-18 border-1 border-[rgb(185,184,184)] flex justify-center items-center">
                <img
                  src={Img2}
                  alt="thumb-2"
                  className="w-12 h-16 cursor-pointer"
                />
              </div>
            </div>

            <div className="w-80 h-100 border-1 border-[rgb(185,184,184)] flex justify-center items-center">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-66 h-88 object-cover"
              />
            </div>
          </div>

          {/* left button  */}

          <div className="w-full flex gap-8 mt-5 ml-14 mb-10">
            {quantity > 0 ? (
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 bg-gray-100 border rounded-[50%] cursor-pointer" onClick={() => setQuantity(quantity-1)}>-</button>
              <span className="text-lg border-1 px-4 ">{quantity}</span>
              <button className="px-3 py-1 bg-gray-100 border rounded-[50%] cursor-pointer" onClick={() => setQuantity(quantity+1)}>+</button>
            </div>
          ) : (
            <button className="px-7 py-2 bg-[#A03037] text-white rounded cursor-pointer" onClick={() => {
              handleAddToBag()
              setQuantity(1)}
            }>
              ADD TO BAG
            </button>
          )}

          <button className="px-7 py-2 bg-gray-700 text-white rounded cursor-pointer" onClick={()=>{
            handleAddToWishlist()
            navigate("/dashboard/wishlist")}
            }>♥ WISHLIST</button>

        </div>
      </div>

        {/* Right Section: Book Details */}
        <div className="ml-13 w-[80%] lg:w-[50%]">
          <h1 className="text-2xl font-semibold">{book.bookName}</h1>
          <p className="text-gray-500">by {book.author}</p>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              {book.rating} ★
            </span>
            <span className="text-gray-500 text-sm ml-2">({book.quantity})</span>
          </div>

          {/* Pricing */}
          <div className="mt-2">
            <span className="text-black text-lg font-semibold">
              Rs. {book.discountPrice}
            </span>
            <span className="text-gray-500 line-through ml-2">
              Rs. {book.price}
            </span>
          </div>

          <hr className="border-gray-400 opacity-50 mt-5 mb-5"></hr>

          {/* Book Description */}
          <div className="mt-4">
            <h3 className="text-lg font-medium">Book Detail</h3>
            <p className="text-gray-600 text-sm mt-1">
             {book.description} .  .
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo aspernatur, 
             corporis aliquam eos itaque iste laborum, magni facere doloremque asperiores ex.
             Sint quod animi velit odit mollitia esse doloribus.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo aspernatur, 
             corporis aliquam eos itaque iste laborum, magni facere doloremque asperiores ex.</p>
          </div>

          <hr className="border-gray-400 opacity-70 mt-5 mb-5"></hr>

        </div>

      </div>

      <CustomerFeedback />

      

    </div>
  );
};

export default BookDetail;
































