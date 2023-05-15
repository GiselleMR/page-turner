import BookCard from "../../components/BookCard/BookCard";
import { getUserBooks } from "../../utilities/book-api";
import { useEffect, useState } from "react";

export default function MyBookListPage() {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    async function getBooks() {
      const books = await getUserBooks()
      setBookList(books)
    }
    getBooks();
  }, [book])
  console.log('bookListPage');
  return (
    <div>
      <h1 className="BookList">My Book List</h1>
    {bookList.length > 0 ? (
      <div className="bookListContainer">
      {bookList.map((book) => <BookCard book={book} key={book.googleid} textButton="DELETE"  loading="removing..." success="removed" isBookList={true} bookList={bookList} setBook={setBook} />)}
      </div>
    ) : <p className="bookL">no books Added</p>}
    </div>
  );
}