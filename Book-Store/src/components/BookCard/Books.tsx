import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img-2.png";
import Img3 from "../../assets/img-3.png";
import { getBooksApiCall } from "../../utility/Product";

export interface Book {
  id: number;
  bookName: string;
  author: string;
  price: number;
  discountPrice: number;
  rating: number;
  quantity: number;
  image: string;
  description: string
  inStock: boolean;
}

// ✅ API function export karo
export const fetchBooks = () => {
  return getBooksApiCall()
    .then((response) => {
      console.log("🚀 Full API Response:", response); // ✅ Debugging
      console.log("🚀 Full API Response:", response.result); // ✅ Debugging
      

      if (!response) {
        console.error("❌ API response is empty or undefined");
        return [];
      }

      if (response?.result) {
        const booksArray = response.result.map((book: Partial<Book>, index: number) => ({
          id: book.id || index + 1,
          bookName: book.bookName || "Unknown Title",
          author: book.author || "Unknown Author",
          discountPrice: book.discountPrice || 0,
          price: book.price || book.price || 0,
          rating: book.rating || 0,
          quantity: book.quantity || 0,
          image: book.image || [Img1, Img2, Img3][index % 3],
          description:book.description || "Unknown Description",
          inStock: book.quantity !== undefined ? book.inStock : true,
        }));

        console.log("Mapped Books:", booksArray); // ✅ Debugging
        return booksArray;
      } else {
        console.error("Error: API response does not contain 'result'");
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
      return [];
    });
};
