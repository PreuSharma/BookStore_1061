import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function CustomerFeedback() {
    const [selectedStars, setSelectedStars] = useState<boolean[]>(
        Array(5).fill(false)
      );
    
  const handleStarClick = (index: number) => {
    
    setSelectedStars((prev: boolean[]) => {
      const newStars = [...prev];
      newStars[index] = !newStars[index]; // Toggle the clicked star
      return newStars;
    });
  };

  return (
    <div>
      <div className="ml-97 -mt-40">
                {/* Customer Feedback Section */}
                <div className=" mt-5">
                  <h3 className="text-lg font-semibold">Customer Feedback</h3>
      
                  <div className="w-[577px] h-[220px] bg-[#F5F5F5] rounded-sm p-4 ">
                    <div className="flex flex-col gap-2 mt-3 ">
                      <span className="text-gray-500 text-left ml-2 ">
                        Overall rating
                      </span>
                      <div className="flex ml-2  gap-4">
                        {selectedStars.map((isSelected: boolean, index: number) => (
                          <FaStar
                            key={index}
                            className={`text-lg cursor-pointer ${
                              isSelected ? "text-yellow-500" : "text-gray-300"
                            }`}
                            onClick={() => handleStarClick(index)}
                          />
                        ))}
                      </div>
                      <textarea
                        placeholder="Write your review"
                        className=" ml-2 w-[527px] h-[63px] mt-3 p-3  bg-[white] rounded-xs resize-none focus:ring-2 focus:ring-blue-300"
                        rows={3}
                      ></textarea>
                      <button className=" w-[76px] h-[24px] bg-[#3371B5]  ml-115 text-white text-center rounded-xs mt-3 hover:bg-blue-600 cursor-pointer">
                        Submit
                      </button>
                    </div>
                  </div>
      
                  {/* Sample Reviews */}
                  <div className="mt-6 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">Aniket Chile</span>
                      <div className="flex">
                        {[...Array(3)].map((_, index) => (
                          <FaStar key={index} className="text-yellow-400" />
                        ))}
                        {[...Array(2)].map((_, index) => (
                          <FaStar key={index} className="text-gray-300" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 w-[80%]">
                      Good product. Even though the translation could have been
                      better, Chanakya's neeti are thought provoking. Chanakya has
                      written on many different topics and his writings are succinct.
                    </p>
                  </div>
                  
      
                  <div className="mt-6 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">Shweta Bodkar</span>
                      <div className="flex">
                        {[...Array(3)].map((_, index) => (
                          <FaStar key={index} className="text-yellow-400" />
                        ))}
                        {[...Array(2)].map((_, index) => (
                          <FaStar key={index} className="text-gray-300" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 w-[80%]">
                      Good product. Even though the translation could have been
                      better, Chanakya's neeti are thought provoking. Chanakya has
                      written on many different topics and his writings are succinct.
                    </p>
                  </div>
      
      
      
                </div>
                </div>
    </div>
  )
}
