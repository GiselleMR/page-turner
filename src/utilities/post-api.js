import sendRequest from "./send-request";
const BASE_URL = '/api/post';

export async function addPost(post) {
    return sendRequest(`${BASE_URL}`, 'POST', post);
  }
export async function getAll() {
    return sendRequest(`${BASE_URL}`);
  }