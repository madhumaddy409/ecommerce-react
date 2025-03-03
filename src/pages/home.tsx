import React, { useEffect } from 'react'
import Header from '../components/header/header'
import OfferProducts from '../components/OfferProdcuts/offerProcts'
import FeaturedProducts from '../components/featuredProducts/featuredProducts'
import Category from '../components/category/category'
import BestSales from '../components/bestSales/bestSales'
import NewProducts from '../components/newProducts/newProducts'
import Footer from '../components/fotter/fotter'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { addUser } from '../store/user/user-slice'
import { Box, CssBaseline } from "@mui/material";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Check if redirected with user data
    const queryParams = new URLSearchParams(window.location.search);
    const user = queryParams.get("user");
  
    if (user) {
      try {
        const userData = JSON.parse(decodeURIComponent(user));
        localStorage.setItem("user", JSON.stringify(userData));
      
        // adding user info to store
        dispatch(
          addUser({
            email: userData.email,
            firstName: userData.first_name,
            profilePicture: userData.profile_picture_url,
            role: userData
          })
        )
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
  
      // Clear query parameters from the URL
      window.history.replaceState({}, document.title, "/");
    }
  }, []);
  
  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
        <Header />
        <OfferProducts />
        <FeaturedProducts />
        <Category />
        <BestSales />
        <NewProducts />
        <Footer />
    </Box>

  )
}

export default Home