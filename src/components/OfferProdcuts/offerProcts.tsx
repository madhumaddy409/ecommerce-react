import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { LocalShipping, Replay, Security, Support } from "@mui/icons-material";
import ToyotaCorollaSlider from "../../commonComponts/slider";

const OfferProducts = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Offers Section */}
      <Grid container spacing={2} sx={{height: "100%"}}>
        {/* Main Product Offer */}
        <Grid item xs={12} md={10} >
          <ToyotaCorollaSlider />
        </Grid>

        {/* Featured Products */}
        <Grid item xs={12} md={2} sx={{display: "flex", flexDirection: "rows", justifyContent: "center", padding: 2 }}>
          <Box>
            <Card sx={{ marginBottom: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.hgmsites.net/hug/2021-toyota-corolla_100752492_h.jpg" // Replace with product image
                alt="Google Pixel 6 Pro"
              />
              <CardContent>
                <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
                  SUMMER SALES
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  New Google Pixel 6 Pro
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  29% OFF
                </Typography>
                <Button size="small" variant="contained" color="primary">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://tse2.mm.bing.net/th?id=OIP.euGhdWxyGVkxAgPJ-5WjzwHaE8&pid=Api&P=0&h=180" // Replace with product image
                alt="Xiaomi FlipBuds Pro"
              />
              <CardContent>
                <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
                  EXCLUSIVE OFFER
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Xiaomi FlipBuds Pro
                </Typography>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  $299 USD
                </Typography>
                <Button size="small" variant="contained" color="primary">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Grid container spacing={2} sx={{ mt: 3, border:  '1px solid #E0E0E0', paddingBottom: '5px' }} >
        {[
          { icon: <LocalShipping />, title: "Fasted Delivery", description: "Delivery in 24H" },
          { icon: <Replay />, title: "24 Hours Return", description: "100% money-back guarantee" },
          { icon: <Security />, title: "Secure Payment", description: "Your money is safe" },
          { icon: <Support />, title: "Support 24/7", description: "Live contact/message" },
        ].map((feature, index) => (
          <Grid item xs={12} sm={8} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 1,
                borderRight: '1px solid #E0E0E0'
              }}
            >
              <Box sx={{ fontSize: 40, color: "primary.main" }}>{feature.icon}</Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OfferProducts;
