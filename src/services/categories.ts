import axios from "axios";

export const fetchCategories = async () => {
    // Make the request with credentials (cookies)
    const { data } = await axios.get("http://localhost:8000/category", {
      withCredentials: true,  // This sends the session cookie with the request
    });
  
    return data;
  };