import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useRef, useState } from "react";
import { fetchCategoryProducts } from "../../services/products/products";
import { useQuery } from "@tanstack/react-query";


const productData = [
  {
    title: "Computer & Laptop",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "Computer & Laptop",
  },
  {
    title: "SmartPhone",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "SmartPhone",
  },
  {
    title: "Headphones",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "Headphones",
  },
  {
    title: "Accessories",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "Accessories",
  },
  {
    title: "Camera & Photo",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "Camera & Photo",
  },
  {
    title: "TV & Homes",
    image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
    alt: "TV & Homes",
  },
];

function Category() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByDistance = (distance: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("div")?.clientWidth || 0;
      scrollByDistance(-(cardWidth + 16) * 5); // Scroll 5 cards to the left.
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("div")?.clientWidth || 0;
      scrollByDistance((cardWidth + 16) * 5); // Scroll 5 cards to the right.
    }
  };

  
  return (
    <Box sx={{ padding: 3 }}>
      {/* Section Header */}
      <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
        Shop with Categories
      </Typography>

      {/* Carousel Container */}
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        {/* Left Arrow */}
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            left: -10,
            zIndex: 10,
            backgroundColor: "white",
            border: "1px solid #ccc",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Scrollable Content */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            width: "100%)", // Width for 5 cards.
            padding: 2,
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for better UX
            },
          }}
        >
          {productData.map((item, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 348,
                flexShrink: 0,
                border: "1px solid #f0f0f0",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.alt}
              />
              <CardContent>
                <Typography variant="subtitle2" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            right: -10,
            zIndex: 10,
            backgroundColor: "white",
            border: "1px solid #ccc",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Category;
