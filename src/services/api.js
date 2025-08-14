
// api.js
import axios from 'axios';

const API_KEY = "AIzaSyAffCQD_VMS8yg7ZLEKWRnh73xZSXB11Kk"; // Replace this with your actual API key
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query = 'harry potter') => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}&key=${API_KEY}&maxResults=30`);
   

    return response.data.items;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
  export const SearchBooks = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.items || [];
};














