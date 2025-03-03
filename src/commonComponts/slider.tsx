import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ToyotaCorollaSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const SliderComponent = Slider as any;

  // Slider settings
const sliderSettings = (activeSlide: number) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      // Update activeSlide dynamically when slide changes
      setActiveSlide(newIndex);
    },
    appendDots: (dots: React.ReactNode) => (
      <Box sx={{ position: "absolute", left: "-45%", top: "90%", transform: "translateY(-50%)" }}>
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>{dots}</ul>
      </Box>
    ),
    customPaging: (i: number) => (
      <Box
        sx={{
          height: "10px",
          width: "10px",
          backgroundColor: i === activeSlide ? "#000" : "#fff", // Use the active slide index to set color
          borderRadius: "50%",
        }}
      />
    ),
  });
  
  const corollaImages = [
    {
      image: "https://tse2.mm.bing.net/th?id=OIP.haSIEsLCYN0gxZWsOKplswHaE7&pid=Api&P=0&h=180",
      alt: "Toyota Corolla - Front View",
      title: "Toyota Corolla - Efficient and Stylish",
      description: "The perfect combination of performance, safety, and innovation.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Toyota+Corolla+2",
      alt: "Toyota Corolla - Side View",
      title: "Ride in Comfort",
      description: "Experience the smooth drive and luxury of the Toyota Corolla.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Toyota+Corolla+3",
      alt: "Toyota Corolla - Rear View",
      title: "Corolla: Your Road Companion",
      description: "Exceptional design and innovation for a better journey.",
    },
  ];

  return (
    <Box sx={{ height: "600px", width: "100%", position: "relative" }}>
      <SliderComponent {...sliderSettings(activeSlide)}>
        {corollaImages.map((item, index) => (
          <Box
            key={index}
            sx={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: 4,
                borderRadius: 2,
                maxWidth: "100%",
                textAlign: "left",
                height: "100%",
              }}
            >
              <Typography variant="h3" fontWeight="bold" mb={8}>
                {item.title}
              </Typography>
              <Typography variant="body1" mb={8}>
                {item.description}
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Explore Now
              </Button>
            </Box>
          </Box>
        ))}
      </SliderComponent>
    </Box>
  );
};

export default ToyotaCorollaSlider;
