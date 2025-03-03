import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

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
    }
  ];
function NewProducts() {
  return (
    <Box sx={{ padding: '10px' }}>
      <Grid container spacing={2} justifyContent="center">
        {/* First Product */}
        {
            productData.map((item, index) => (
         <Grid item xs={12} md={6} key={index}>
          <Card sx={{ width: '100%', margin: '0 auto' }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.alt}
              sx={{ height: 'auto', maxWidth: '100%' }}
            />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Button size="small" variant="contained" color="primary">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
            ))
        }
      </Grid>
    </Box>
  );
}

export default NewProducts;
