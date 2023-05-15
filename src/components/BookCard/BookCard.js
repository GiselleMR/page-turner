import { addBook } from "../../utilities/book-api";
import {useState} from "react";

const BookCard = ({ book, textButton, isBookList, loading, success, bookList, setBook }) => {
    const [added, setAdded] = useState(false)
    const [buttonText, setButtonText] = useState(textButton)
    const handleAddBook = async() => {
        setButtonText(loading)
        console.log('clicked')
        try {
            const addedBook = await addBook(book)
            console.log('book added', addedBook);
            if (isBookList) {
                setAdded(false)

                setBook(addedBook)
            } else (
                setAdded(true)

                )
                setBook(addedBook);
            setButtonText(success)
        } catch (err) {
        }
    }
    return (
        <div className="bookCard">
            <img src= {book.image} alt={book.title} />
            <h3>{book.title}: {book.subtitle}</h3>
            <div className="bookCardBottom">
            <p> Authored by:{book.authors.join(', ')}</p>
            <button onClick={handleAddBook} disabled={added} >{isBookList?"remove":buttonText}</button>
            </div>
        </div>
    )
}

export default BookCard;