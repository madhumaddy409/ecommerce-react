import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*",
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
      image: "https://hips.hearstapps.com/hmg-prod/images/2025-ford-mustang-60th-anniversary-exterior-66227932bb88e.jpg?crop=0.793xw:1.00xh;0.106xw,0&resize=2048:*",
    },
  ]);

  // Function to handle remove
  const handleRemove = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to handle quantity change
  const handleQuantityChange = (id: number, change: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Calculate Total
  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: "25px", display: "flex", flexDirection: "column", minHeight: "75vh" }}>
      <Grid container spacing={3}>
        {/* Left Section: Shopping Cart */}
        <Grid item xs={12} md={8}>
          <Box sx={{ border: "1px solid #77878F", borderRadius: 2 }}>
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h6" color="#77878F">
                Shopping Cart
              </Typography>
            </Box>
            <TableContainer>
              <Table>
                {/* Table Header */}
                <TableHead>
                  <TableRow sx={{backgroundColor: "#F2F4F5"}}>
                    <TableCell>Action</TableCell>
                    <TableCell>Products</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Sub.Total</TableCell>
                  </TableRow>
                </TableHead>
                {/* Table Body */}
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <IconButton
                          color="error"
                          onClick={() => handleRemove(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: 50, height: 50, borderRadius: 4 }}
                          />
                          <Typography>{item.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                          }}
                        >
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </Button>
                          <Typography>{item.quantity}</Typography>
                          <Button
                            size="small"
                            variant="outlined"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        ${item.price * item.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
              }}
            >
              <Button variant="outlined">Return to Shop</Button>
              <Button variant="contained">Update Cart</Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section: Card Totals and Coupon */}
        <Grid item xs={12} md={4}>
          <Box sx={{ border: "1px solid #77878F", borderRadius: 2, marginBottom: 2 }}>
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h6" color="#77878F">
                Card Totals
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Typography>Sub-total</Typography>
                <Typography>${calculateTotal()}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${calculateTotal()} USD</Typography>
              </Box>
              <Button fullWidth variant="contained" color="warning">
                Proceed to Checkout
              </Button>
            </Box>
          </Box>

          {/* Coupon Section */}
          <Box sx={{ border: "1px solid #77878F", borderRadius: 2 }}>
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h6" color="#77878F">
                Coupon Code
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Enter Coupon Code"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Apply Coupon
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShoppingCart;
