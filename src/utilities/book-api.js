import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:3001';

export async function searchBooks(searchTerm) {
  console.log('DO WE GET HERE')
    return sendRequest(`${BASE_URL}/api/books/search`, 'POST', searchTerm);
  }
export async function addBook(book) {
    return sendRequest(`${BASE_URL}/api/books/add`, 'POST', book);
  }
export async function getUserBooks() {
    return sendRequest(`${BASE_URL}`, 'GET');
  }
export async function removeBook(book) {
    return sendRequest(`${BASE_URL}/remove/${book._id}`, 'DELETE');
  }