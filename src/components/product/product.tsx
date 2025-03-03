import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageSlider from '../../commonComponts/imageSlider'
import ProductDetails from './productDeatils';

const features = ["Free 1 Year Warranty", "Free Shipping & Fasted Delivery", "100% Money-back guarantee","24/7 Customer support", "Secure payment method"];
const shipping = [{
    "Courier": "2 - 4 days, free shipping",
    "Local Shipping": "up to one week, $19.00",
    "UPS Ground Shipping": "4 - 6 days, $29.00",
    "Unishop Global Export": " 3 - 4 days, $39.00"
}]
const productDescriptionTabs = ["Description", "Additional information", "Specification", "Review"];

const products = [
    {
      category: "RELATED PRODUCT",
      items: [
        { title: "Bose Sport Earbuds", description: "Wireless Earphones", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Simple Mobile 4G LTE", description: "Prepaid Smartphone", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "4K UHD LED Smart TV", description: "With Chromecast Built-in", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
      ],
    },
    {
      category: "PRODUCT ACCESSORIES",
      items: [
        { title: "Samsung Galaxy S21 SG", description: "Samsung Electronics", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Simple Mobile 5G", description: "Galaxy 12 Mini 512GB", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Sony DSC-HX8", description: "High Zoom Point & Shoot Camera", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
      ],
    },
    {
      category: "APPLE PRODUCT",
      items: [
        { title: "TOZO T6 True Wireless", description: "Earbuds Bluetooth Headphones", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "JBL FLIP 4", description: "Waterproof Portable Speaker", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Wyze Cam Pan v2", description: "1080p Pan/Tilt Smart Camera", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
      ],
    },
    {
      category: "FEATURED PRODUCTS",
      items: [
        { title: "Portable Washing Machine", description: "11lbs capacity Model", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Sony DSC-HX8", description: "High Zoom Point & Shoot Camera", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
        { title: "Dell Optiplex", description: "All-in-One Computer Monitor", price: "$1,500", image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*" },
      ],
    },
  ];



function Product() {
    const [selectedImage, setSelectedImage] = useState(
        "https://i.pinimg.com/736x/e7/c7/59/e7c759f3d9b3a6e48c1003dd7b523aea.jpg"
    );
    const [activeTab, setActiveTab] = useState("Description"); // Track the active tab
    
    const handleImageSelect = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const renderContent = () => {
        switch (activeTab) {
          case "Description":
            return (
              <Grid container spacing={2} sx={{ border: "1px solid #5F6C72" }}>
                <Grid item md={6} sm={12} lg={6} xs={12} padding={1}>
                  <Typography sx={{ paddingBottom: "20px",  paddingTop: "60px" }}>Description</Typography>
                  <Typography color="#5F6C72">
                    The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip —
                    the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.
                  </Typography>
                </Grid>
                <Grid item md={3} sm={12} lg={3} xs={12} padding={1} sx={{ display: "flex", alignItems: "flex-start" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ paddingBottom: "10px", paddingTop: "60px" }}>
                    Feature
                  </Typography>
                  {features.map((feature, index) => (
                    <Typography key={index}>{feature}</Typography>
                  ))}
                  </Box>
                   {/* Vertical Line */}
                  <Box
                    sx={{
                      borderRight: "2px solid #5F6C72", // Line style
                      height: "100%", // Make the height match the content
                      marginX: 5, // Horizontal margin to separate the sections
                    }}
                  />
                </Grid>
                <Grid item md={3} sm={12} lg={3} xs={12} padding={1}>
                  <Typography sx={{ paddingBottom: "10px", paddingTop: "60px" }}>
                    Shipping Information
                  </Typography>
                  {shipping.map((item, index) =>
                    Object.entries(item).map(([key, value]) => (
                      <Box
                        key={`${index}-${key}`}
                        sx={{ display: "flex", gap: 1, alignItems: "center" }}
                      >
                        <Typography>{key}:</Typography>
                        <Typography color="#5F6C72">{value}</Typography>
                      </Box>
                    ))
                  )}
                </Grid>
              </Grid>
            );
          case "Additional information":
            return (
                <Grid container spacing={2} sx={{ border: "1px solid #5F6C72" }}>
                    <Typography>
                        This is the additional information content.
                    </Typography>
                </Grid>
            );
          case "Specification":
            return (
                <Grid container spacing={2} sx={{ border: "1px solid #5F6C72" }}>
                    <Typography>
                        Here are the specifications of the product.
                    </Typography>
                </Grid>
            );
          case "Review":
            return (
                <Grid container spacing={2} sx={{ border: "1px solid #5F6C72" }}>
                <Typography>
                    Reviews go here.
                </Typography>
                </Grid>
            );
          default:
            return null;
        }
      };




  return (
   <Box sx={{padding: "30px"}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={6}>
                <Box
                 component="img"
                 src= {selectedImage}
                 alt= ""
                 sx={{
                    width: "100%",
                    height: "500px", // Fixed height
                    borderRadius: 2,
                    objectFit: "cover", // Ensures the image fills the box while maintaining its aspect ratio
                    objectPosition: "center", // Centers the image within the box
                    backgroundColor: "#f0f0f0", // Fallback background in case the image loads late
                  }}
                />
                <ImageSlider onImageSelect={handleImageSelect} />
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
                  <ProductDetails />
            </Grid>
        </Grid>
        <Box sx={{padding: "20px"}}>
            <Grid container spacing={2}>
                <Grid sx={{ display: "flex", alignItems: "center", gap: 5, border: "1px solid #5F6C72",  justifyContent: "center",}} sm={12} md={12} padding={1} >
                    {productDescriptionTabs.map((tab) => (
                        <Typography
                        key={tab}
                        onClick={() => setActiveTab(tab)} // Change active tab on click
                        sx={{
                            cursor: "pointer",
                            borderBottom: activeTab === tab ? "2px solid #5F6C72" : "none",
                            paddingBottom: "5px",
                        }}
                        >
                        {tab}
                        </Typography>
                    ))}
                </Grid>
               
                     {/* Dynamic Content */}
                <Grid item xs={12}>
                    {renderContent()}
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ padding: "20px" }}>
                <Grid container spacing={4}>
                    {/* Loop through each category */}
                    {products.map((category, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <Box>
                        {/* Column title */}
                        <Typography
                            variant="h6"
                            sx={{ marginBottom: 2, textAlign: "center" }}
                        >
                            {category.category}
                        </Typography>

                        {/* Products in the column */}              
                        <Grid container spacing={3}>
                        {category.items.map((item, idx) => (
                            <Grid
                            item
                            xs={12}
                            key={idx}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                            >
                            <Card sx={{ boxShadow: 2, display: "flex", flexDirection: "row" }}>
                                {/* Image on the left */}
                                <Grid item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                    width: "100%", // Ensures full width of left column
                                    objectFit: "cover", // Adjusts how the image is displayed
                                    }}
                                />
                                </Grid>

                                {/* Card Content on the right */}
                                <Grid item xs={6}>
                                <CardContent>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    {item.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                    {item.price}
                                    </Typography>
                                </CardContent>
                                </Grid>
                            </Card>
                            </Grid>
                        ))}
                        </Grid>
                        </Box>
                    </Grid>
                    ))}
                </Grid>
                </Box>
                </Grid>
            </Grid>
        </Box>

   </Box>
  )
}

export default Product