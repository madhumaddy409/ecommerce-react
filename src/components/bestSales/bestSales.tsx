import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const productData = [
  {
    title: "New Google Pixel 6 Pro",
    description: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    discount: "29% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Google Pixel 6 Pro",
  },
  {
    title: "New Samsung Galaxy S22",
    description: "Enjoy superfast performance with this incredible phone.",
    discount: "20% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Samsung Galaxy S22",
  },
  {
    title: "Apple iPhone 14",
    description: "Experience ultimate design and performance.",
    discount: "15% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Apple iPhone 14",
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "Compact and powerful, perfect for productivity.",
    discount: "10% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Dell XPS 13",
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "Compact and powerful, perfect for productivity.",
    discount: "10% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Dell XPS 13",
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "Compact and powerful, perfect for productivity.",
    discount: "10% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Dell XPS 13",
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "Compact and powerful, perfect for productivity.",
    discount: "10% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Dell XPS 13",
  },
  {
    title: "Dell XPS 13 Laptop",
    description: "Compact and powerful, perfect for productivity.",
    discount: "10% OFF",
    image: "https://via.placeholder.com/150", // Replace with actual product image
    alt: "Dell XPS 13",
  },
];

const BestSales = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        {/* Large Feature Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ marginBottom: 2, height: "100%" }}>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/200" // Replace with product image
              alt="Feature Product"
            />
            <CardContent>
              <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
                SUMMER SALES
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                New Google Pixel 6 Pro
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                fontWeight="bold"
                sx={{ marginBottom: 1 }}
              >
                29% OFF
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                fontWeight="bold"
                sx={{ marginBottom: 2 }}
              >
                Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
              </Typography>
              <Button size="small" variant="contained" color="primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Smaller Grid Cards */}
        <Grid item xs={12} md={8} container spacing={2}>
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image} // Replace with product image
                  alt={product.alt}
                />
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "secondary.main", marginBottom: 1 }}
                  >
                    SUMMER SALES
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    fontWeight="bold"
                    sx={{ marginBottom: 1 }}
                  >
                    {product.discount}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight="bold"
                    sx={{ marginBottom: 2 }}
                  >
                    {product.description}
                  </Typography>
                  <Button size="small" variant="contained" color="primary">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestSales;
