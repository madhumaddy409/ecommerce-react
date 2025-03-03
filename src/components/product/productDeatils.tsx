import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Rating,
  Divider,
  TextField,
  RadioGroup,
  Radio,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const colorOptions = [
    { label: "Orange", value: "orange" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Gray", value: "gray" },
  ];

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [memory, setMemory] = useState("16GB unified memory");
  const [size, setSize] = useState("14-inch Liquid Retina XDR display");
  const [storage, setStorage] = useState("1TB SSD Storage");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor((event.target as HTMLInputElement).value);
  };

  const handleQuantityChange = (action: string) => {
    if (action === "increment") setQuantity(quantity + 1);
    if (action === "decrement" && quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Product Title and Rating */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginY: 1 }}>
        <Rating value={4.7} readOnly precision={0.1} />
        <Typography variant="body2">(21,671 User feedback)</Typography>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
        Storage) - Space Gray
      </Typography>

      {/* SKU and Availability */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Sku: A264671
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Brand: Apple
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Availability:{" "}
            <Typography component="span" color="green">
              In Stock
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
            Category: Electronics Devices
          </Typography>
          </Typography>
        </Grid> 
      </Grid>

      <Divider sx={{ marginY: 2 }} />

      {/* Price Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
          $1699
        </Typography>
        <Typography
          variant="body1"
          sx={{ textDecoration: "line-through", color: "text.secondary" }}
        >
          $1900.00
        </Typography>
        <Typography
          variant="body1"
          sx={{ backgroundColor: "#FFD700", paddingX: 1, borderRadius: 1 }}
        >
          21% OFF
        </Typography>
      </Box>

      {/* Options (Color, Memory, Size, Storage) */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        {/* Color Options */}
        <Grid item xs={12} sm={6} md={6}>
          <FormControl sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Color Options:
            </Typography>
            <RadioGroup
              row
              value={selectedColor}
              onChange={handleColorChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "flex-start",
              }}
            >
              {colorOptions.map((option, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Radio
                    value={option.value}
                    checkedIcon={
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: option.value,
                          border: "2px solid #FFA500",
                        }}
                      />
                    }
                    icon={
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          backgroundColor: option.value,
                          border: "2px solid transparent",
                        }}
                      />
                    }
                    sx={{ padding: 0 }}
                  />
                  <Typography variant="body2">{option.label}</Typography>
                </Box>
              ))}
            </RadioGroup>
          </FormControl>

          {/* Memory Options */}
          <FormControl fullWidth>
            <InputLabel>Memory</InputLabel>
            <Select
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
              fullWidth
            >
              <MenuItem value="16GB unified memory">16GB unified memory</MenuItem>
              <MenuItem value="32GB unified memory">32GB unified memory</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Size and Storage Options */}
        <Grid item xs={12} sm={6} md={6} pt={4.5}>
          <FormControl fullWidth sx={{ marginBottom: 3 }}>
            <InputLabel>Size</InputLabel>
            <Select value={size} onChange={(e) => setSize(e.target.value)} fullWidth>
              <MenuItem value="14-inch Liquid Retina XDR display">
                14-inch Liquid Retina XDR display
              </MenuItem>
              <MenuItem value="16-inch Liquid Retina XDR display">
                16-inch Liquid Retina XDR display
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Storage</InputLabel>
            <Select
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
              fullWidth
            >
              <MenuItem value="1TB SSD Storage">1TB SSD Storage</MenuItem>
              <MenuItem value="512GB SSD Storage">512GB SSD Storage</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Quantity and Buttons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: 1,
            padding: 1,
          }}
        >
          <IconButton onClick={() => handleQuantityChange("decrement")}>
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            variant="standard"
            inputProps={{
              style: { textAlign: "center", width: 100 },
            }}
            sx={{
              '& .MuiInput-underline:before': { borderBottom: 'none' },
              '& .MuiInput-underline:after': { borderBottom: 'none' },
              '& .MuiInput-underline:hover:before': { borderBottom: 'none !important' },
            }}
          />
          <IconButton onClick={() => handleQuantityChange("increment")}>
            <AddIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ minWidth: 250, padding: "10px 20px" }}
        >
          ADD TO CART
        </Button>

        <Button
          variant="contained"
          color="warning"
          sx={{ minWidth: 150, padding: "10px 20px" }}
        >
          BUY NOW
        </Button>
      </Box>


      {/* Wishlist and Share */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginBottom: 2 }}>
        <Button variant="text">Add to Wishlist</Button>
        <Button variant="text">Add to Compare</Button>
      </Box>

      <Divider sx={{ marginY: 2 }} />

      {/* Guarantee Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body1">100% Guarantee Safe Checkout:</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* Add images/icons for payment methods */}
          <Box
            sx={{
              width: 50,
              height: 30,
              backgroundColor: "#ccc",
              display: "inline-block",
            }}
          ></Box>
          <Box
            sx={{
              width: 50,
              height: 30,
              backgroundColor: "#ccc",
              display: "inline-block",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;
