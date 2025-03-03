import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useRef, useState } from 'react'

const productData = [
    {
      title: "Computer & Laptop",
      image: "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg", // Replace with actual product image
      alt: "Computer & Laptop",
    },
    {
      title: "SmartPhone",
      image: "https://i.pinimg.com/736x/5b/8e/32/5b8e32b5b84cf5ac6fb29ea9535cdfa9.jpg", // Replace with actual product image
      alt: "SmartPhone",
    },
    {
      title: "Headphones",
      image: "https://i.pinimg.com/736x/c2/49/96/c2499673ce4e50ff70d0008e8986d2d7.jpg", // Replace with actual product image
      alt: "Headphones",
    },
    {
      title: "Accessories",
      image: "https://preview.redd.it/chassis-67-gt500-is-alive-and-well-v0-ha7x0je6v9hd1.jpg?width=640&crop=smart&auto=webp&s=db386819a409b18fa5cd8302ba344e1112a51e97", // Replace with actual product image
      alt: "Accessories",
    },
    {
      title: "Camera & Photo",
      image: "https://stat.overdrive.in/wp-content/uploads/2016/01/Bobs-Story-Ford-Mustang-1971-Mustang-Coupe.jpg", // Replace with actual product image
      alt: "Camera & Photo",
    },
    {
      title: "TV & Homes",
      image: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/03/12/Pictures/_d03c8f62-e854-11e5-872f-c4e2863eb78d.JPG", // Replace with actual product image
      alt: "TV & Homes",
    },
    {
        title: "TV & Homes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M8j2r8x9GH3l9WDp-DCWS-wEItqdRfYNdg&s", // Replace with actual product image
        alt: "TV & Homes",
      },
      {
        title: "TV & Homes",
        image: "https://cdn.dealeraccelerate.com/octane/1/673/63221/1920x1440/1972-ford-mustang-mach-1", // Replace with actual product image
        alt: "TV & Homes",
      },
      {
        title: "TV & Homes",
        image: "https://cdn.dealeraccelerate.com/worldwide/1/7208/443189/790x1024/w/1972-ford-mustang-mach-1", // Replace with actual product image
        alt: "TV & Homes",
      }
  ];

interface ImageSliderProps {
    onImageSelect: (imageUrl: string) => void; // Define prop type
}

  
function ImageSlider({ onImageSelect }: ImageSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");

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

    const slectImage = (imageUrl: string) => {
        if(imageUrl) {
            setSelectedImage(imageUrl);
            onImageSelect(imageUrl);
        }
    }

    return (
      <Box sx={{ padding: 1 }}>
  
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
              gap: 1,
              overflowX: "auto",
              scrollBehavior: "smooth",
              width: "100%", // Width for 5 cards.
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar for better UX
              },
            }}
          >
            {productData.map((item, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 150,
                  minHeight: 85,
                  flexShrink: 0,
                  border: selectedImage === item.image ? "2px solid orange" : "1px solid #f0f0f0", // Conditional border
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="112"
                  image={item.image}
                  alt={item.alt}
                  onClick={() => slectImage(item.image)}
                  sx={{
                    width: "100%",
                    height: "100px", // Fixed height
                    objectFit: "cover", // Ensures the image fills the box while maintaining its aspect ratio
                    objectPosition: "center", // Centers the image within the box
                    backgroundColor: "#f0f0f0", // Fallback background in case the image loads late
                  }}
                />
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

export default ImageSlider