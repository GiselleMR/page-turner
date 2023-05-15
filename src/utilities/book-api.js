import sendRequest from "./send-request";
const BASE_URL = '/api/books';

export async function searchBooks(searchTerm) {
    return sendRequest(`${BASE_URL}/search`, 'POST', searchTerm);
  }
export async function addBook(book) {
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
  }
export async function getUserBooks() {
    return sendRequest(`${BASE_URL}`, 'GET');
  }
export async function removeBook(book) {
    return sendRequest(`${BASE_URL}/remove/${book._id}`, 'DELETE');
  }