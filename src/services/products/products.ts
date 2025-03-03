import axios from "axios";

export const fetchCategoryProducts = async (categoryId: number) => {
    // Make the request with credentials (cookies)
    const { data } = await axios.get(`http://localhost:8000/products?categoryId=${categoryId}`);
  
    return data;
  };