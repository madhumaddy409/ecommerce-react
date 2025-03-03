import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Footer() { // Correct the typo from "Fotter" to "Footer"
  return (
    <Box sx={{
        padding: '15px', 
        textAlign: 'center', 
        backgroundColor: '#191C1F'}}> {/* Add textAlign center here */}
      <Grid container justifyContent="center" alignItems="center">
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color='#ADB7BC'
          sx={{ textAlign: 'center' }} // Ensure the Typography content is centered
        >
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </Typography>
      </Grid>
    </Box>
  );
}

export default Footer;
