import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function ProductTrackOrder() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '75vh', padding: "20px" }}>
        <Grid container spacing={2}>
            <Grid item sm={12} md={10}>
                <Typography fontWeight={"bold"} color="textPrimmary">
                    Track Order
                </Typography >
                <Grid item sm={12} md={6} alignContent={"center"}>
                <Typography variant="subtitle2" color="textSecondary" sx={{paddingTop: "10px"}}> 
                    To track your order please enter your order ID in the input field below and press the “Track Order” button. 
                    this was given to you on your receipt and in the confirmation email you should have received. 
                </Typography>
                    <Box sx={{ display: "flex", alignItems:"center", gap:50 }} pt={4}>
                        <Typography variant="subtitle2" color="textPrimmary"> 
                            Order ID 
                        </Typography>                      
                        <Typography variant="subtitle2" color="textPrimmary"> 
                            Billing Email
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems:"center", gap:15 }} pt={1}>
                        <TextField
                        fullWidth
                        label="Id..."
                        variant="outlined"
                        name="OrderId"
                        value={""}>
                        </TextField>
                        <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        name="Email"
                        value={""}>
                        </TextField>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center"}} pt={1}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Order ID that we sended to your in your email address.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center"}} pt={2}>
                    <Button variant="contained" sx={{backgroundColor: "#FA8232"}} size="large">
                            Track Order
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProductTrackOrder