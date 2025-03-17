import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Pagination } from 'antd';
import { fetchBooks, Book }  from "../BookCard/Books.tsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const BookCard: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks()
      .then((data) => {
        console.log("Books in State:", data); // ✅ Debugging
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  

  return (
    <div className="p-8  ml-5 md:ml-17 lg:ml-35 mr-10 mt-20 ">
      
      <div className="flex gap-150">
        <h1 className="text-xl font-semibold mb-4">Books</h1>

        <div className="relative w-60 ml-90 -mt-3">
          <select className="w-full appearance-none border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="relevance">Sort by relevance</option>
            <option value="price">Sort by price</option>
            <option value="rating">Sort by rating</option>
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <FaChevronDown className="text-gray-500 -mt-3" />
          </div>
        </div>

      </div>


      
      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available</p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="mt-10 w-[235px] h-[275px] p-[1px] border-1 border-[rgb(185,184,184)] rounded-sm flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/dashboard/books/${book.id}`)} // Navigate on click
          >
            <div className="w-[233px] h-[170px] bg-[#F5F5F5] flex justify-center items-center ">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-[105px] h-[135px] object-cover"
              />
            </div>

            <div className="bg-white w-[233px] h-[110px] p-3">
            <h2 className=" text-[14px] font-semibold mt- text-left">
              {book.bookName}
            </h2>
            <p className="text-gray-500 text-[10px] ">by {book.author}</p>
            <div className="flex items-center mt-1">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-[12px]">
                {book.rating} ★
              </span>
              <span className="text-gray-500 text-sm ml-2">
                ({book.quantity})
              </span>
            </div>
            <div className="mt-[1px]">
              <span className="text-[black] text-[12px] mr-[10px]">Rs. {book.discountPrice}</span>
              <span className="text-gray-500 line-through ml-2">
                Rs. {book.price}
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
      )}

      <div className="flex justify-center mt-10">
      <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
};

export default BookCard;

