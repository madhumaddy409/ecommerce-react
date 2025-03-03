import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Avatar, Button, TableHead, TableBody, TableRow, TableCell, Link, Table, TableContainer, Divider, TextField, InputAdornment, IconButton, FormControl, Input, FormLabel, CircularProgress, Card, CardMedia, Autocomplete, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { ShoppingCart, AccountCircle, LocationOn, List, VisibilityOff, Visibility } from "@mui/icons-material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Home & Kitchen" },
    { id: 4, name: "Books" },
    { id: 5, name: "Toys & Games" },
  ];


function AdminDashboard() {
    const [selectedOption, setSelectedOption] = useState("Dashboard");
    const [selectedOrderDetails, setSelectedOrderDetails] = useState(false);
    const userSession = localStorage.getItem("user");
    const userInfo = userSession ? JSON.parse(userSession) : "";
    const [productImages, setProductImages] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string } | null>(null);
    const [status, setStatus] = useState("active");
    const [selectedImage, setSelectedImage] = useState(productImages[0]);
    const [product, setProduct] = useState<{
        name: string;
        description: string;
        price: string;
        stock: string;
        category: { id: number; name: string } | null; // Update category type
        status: string;
        images: File[]; // Explicitly set the type to File[]
      }>({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: null,
        status: "active",
        images: [],
      });
    


      const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleCategoryChange = (
        event: React.ChangeEvent<{}>, 
        newValue: { id: number; name: string } | null
      ) => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          category: newValue, // Set the selected category object
        }));
      };

      const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
          const filesArray = Array.from(event.target.files);
          setProductImages((prevImages) => [...prevImages, ...filesArray]);
      
          // Update the images in the product state as well
          setProduct((prevProduct) => ({
            ...prevProduct,
            images: [...prevProduct.images, ...filesArray],
          }));
        }
      };

    const handleStatusChange = (_: any, newStatus: null) => {
        if (newStatus !== null) {
          setProduct((prev) => ({
            ...prev,
            status: newStatus,
          }));
        }
      };
    
      const handleSubmit = () => {
        // Validation to ensure all fields are filled in and images are uploaded
        if (!product.name || !product.description || !product.price || !product.stock || !product.category || productImages.length === 0) {
          alert('Please fill in all fields and upload images.');
          return;
        }

        console.log(product,"product")
      
        setIsLoading(true);
      
        // Handle product upload logic here (e.g., make API call)
        setTimeout(() => {
          setIsLoading(false);
          alert('Product uploaded successfully!');
          
          // Prepare form data for API call
          const formData = new FormData();
          formData.append("name", product.name);
          formData.append("description", product.description);
          formData.append("price", product.price);
          formData.append("stock", product.stock);
          formData.append("category", product.category ? product.category.name : ""); // Assuming category has a 'name' field
          formData.append("status", product.status);
          
          // Add images to form data
          productImages.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
      
          // Send formData to API (e.g., with a fetch or axios request)
          // Example:
          // fetch('/api/products', { method: 'POST', body: formData })
          //   .then(response => response.json())
          //   .then(data => console.log(data))
          //   .catch(error => console.error('Error:', error));
      
        }, 2000); // Simulate a delay for API call
      };
      
      




      
    const orders = [
        { id: "#96459761", status: "IN PROGRESS", date: "Dec 30, 2019 05:18", total: "$1,500 (5 Products)", action: "View Details" },
        { id: "#71676167", status: "COMPLETED", date: "Feb 2, 2019 19:28", total: "$80 (11 Products)", action: "View Details" },
        { id: "#95214362", status: "CANCELED", date: "Mar 20, 2019 23:14", total: "$160 (3 Products)", action: "View Details" },
        { id: "#71676167", status: "COMPLETED", date: "Feb 2, 2019 19:28", total: "$80 (1 Product)", action: "View Details" },
        { id: "#51746385", status: "COMPLETED", date: "Feb 2, 2019 19:28", total: "$2,300 (2 Products)", action: "View Details" },
        { id: "#51746385", status: "CANCELED", date: "Dec 30, 2019 07:52", total: "$70 (1 Product)", action: "View Details" },
        { id: "#673971743", status: "COMPLETED", date: "Dec 7, 2019 23:26", total: "$220 (1 Product)", action: "View Details" },
        { id: "#71676167", status: "COMPLETED", date: "Feb 2, 2019 19:28", total: "$80 (1 Product)", action: "View Details" },
        { id: "#51746385", status: "COMPLETED", date: "Feb 2, 2019 19:28", total: "$2,300 (2 Products)", action: "View Details" },
        { id: "#51746385", status: "CANCELED", date: "Dec 30, 2019 07:52", total: "$70 (1 Product)", action: "View Details" },
      ];

      const orderActivity = [
        {
          icon: <BeenhereIcon fontSize="large" sx={{color:'#2DB224'}}/>,
          activity: "05",
          time: "Total Orders",
          color: "#EAF6FE"
        },
        {
          icon: <LocalShippingIcon fontSize="large" sx={{color:'#2DA5F3'}}/>,
          activity: "02",
          time: "Pending Orders",
          color: "#FFF3EB"
        },
        {
          icon: <VerifiedIcon fontSize="large" sx={{color:'#2DA5F3'}}/>,
          activity: "01",
          time: "Completed Orders",
          color: "#EAF7E9"
        }
      ];
      
      const getStatusColor = (status: string) => {
        switch (status) {
          case "IN PROGRESS":
            return "orange";
          case "COMPLETED":
            return "green";
          case "CANCELED":
            return "red";
          default:
            return "black";
        }
      };


      const renderOrderDetails = () => {
        return (
        <Box sx={{padding: "2"}}>
            <Grid display="flex" flexDirection="column">
                <Box>
                <ArrowBackIcon
                    onClick={() => setSelectedOrderDetails(false)}
                    sx={{
                        cursor: "pointer",
                        fontSize: "medium",
                        color: "primary.main",
                    }}
                    />
                    <Link component= "button" variant="subtitle2" fontWeight="bold" onClick={() => setSelectedOrderDetails(false)}>
                        Order Details
                    </Link>
                </Box>

            </Grid>
        </Box>
        )
      }

      const onclickOnOrder = (orderId: String) => {
        console.log(selectedOrderDetails,"==> onclickOnOrder")
        setSelectedOrderDetails(true)
      }

      const onclickAddCardr = () => {
        console.log("need to add card")
      }

      const handleChange = (_event: React.MouseEvent<HTMLElement>, newStatus: string | null) => {
        if (newStatus !== null) setStatus(newStatus);
      };

      const renderContent = () => {
        switch (selectedOption) {
          case "Dashboard":
            return (
                selectedOrderDetails ? renderOrderDetails() :  <Box flex={1} p={3}>
                {/* Header Section */}
                <Typography variant="h5" fontWeight="bold">
                  Hello, Kevin
                </Typography>
                <Typography width={"50%"}>
                From your account dashboard. you can easily check & view your Recent Orders, 
                manage your Shipping and Billing Addresses and edit your Password and Account Details.
                </Typography>
        
                {/* Account Info & Billing Info */}
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 2, height: "80%"}}>
                      <Typography variant="h6">Account Info</Typography>
                      <Box display="flex" alignItems="center" gap={3} mt={1}>
                        <Avatar />
                        <Typography  variant="subtitle1" color="textPrimary" fontWeight="bold">Kevin Gilbert</Typography>
                      </Box>
                      <Box padding={1}>
                          <Typography variant="subtitle2" color="textPrimary">Email: kevin@email.com</Typography>
                          <Typography variant="subtitle2" color="textPrimary">Phone: +123456789</Typography>
                        </Box>
                      <Button variant="contained" sx={{ mt: 2 }}>Edit Account</Button>
                    </Paper>
                  </Grid>
        
                  <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 2, height: "80%" }}>
                      <Typography variant="h6">Billing Address</Typography>
                      <Typography variant="subtitle2" color="textSecondary" mt={1} width={"100%"}>
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 
                        1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                      </Typography>
                      <Box>
                          <Typography variant="subtitle2" color="textPrimary">Email: kevin@email.com</Typography>
                          <Typography variant="subtitle2" color="textPrimary">Phone: +123456789</Typography>
                        </Box>
                      <Button variant="contained" sx={{ mt: 2 }}>Edit Address</Button>
                    </Paper>
                  </Grid>
        
                  <Grid item xs={12} md={4}>
                        <Box sx={{ padding: "10px" }}>
                            {orderActivity.map((activity, index) => (
                                <Box key={index} sx={{ marginBottom: 3 }}>
                                <Grid container spacing={1}>
                                    {/* Icon Section */}
                                    <Grid
                                    item
                                    sm={12}
                                    md={2}
                                    sx={{
                                        textAlign: "left",
                                        backgroundColor: `${activity.color}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    >
                                    <Box sx={{ paddingBottom: "10px", paddingRight: "15px" }}>
                                        {activity.icon}
                                    </Box>
                                    </Grid>
        
                                    {/* Content Section */}
                                    <Grid item sm={12} md={10} pb={2}>
                                    <Typography
                                        variant="subtitle1"
                                        color="textPrimary"
                                        fontWeight="bold"
                                    >
                                        {activity.activity}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {activity.time}
                                    </Typography>
                                    </Grid>
                                </Grid>
                                </Box>
                            ))}
                            </Box>
                  </Grid>
                </Grid>
        
                {/* === Payment Option Row === */}
                <Grid container spacing={2} sx={{ mb: 2}} pt={2}>
              <Grid item xs={12} md={4}>
                <Paper
                  sx={{
                    padding: 3,
                    borderRadius: 3,
                    bgcolor: "#1E2A47", // Dark blue like a credit card
                    color: "white",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
        
        
                  {/* Card Type Icon */}
                  <CreditCardIcon sx={{ fontSize: 40, mb: 1 }} />
        
                  {/* Order Info (Like Credit Card Number) */}
                  <Typography variant="h6" sx={{ letterSpacing: 2 }}>
                    **** **** **** 3621
                  </Typography>
        
                  {/* Order Status & Name */}
                  <Typography variant="body1">Kevin Gilbert</Typography>
                  <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                    Order: #92643621 - In Progress
                  </Typography>
                </Paper>
              </Grid>
                </Grid>
        
                {/* order details list  */}
                <Box>
                {/* Title */}
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                    <Typography variant="h6" fontWeight="bold">RECENT ORDER</Typography>
                    <Link href="#" color="primary" underline="none" sx={{ display: "flex", alignItems: "center", fontSize: 14 }}>
                    View All →
                    </Link>
                </Box>
        
                {/* Orders Table */}
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
                        <TableRow>
                        <TableCell><strong>ORDER ID</strong></TableCell>
                        <TableCell><strong>STATUS</strong></TableCell>
                        <TableCell><strong>DATE</strong></TableCell>
                        <TableCell><strong>TOTAL</strong></TableCell>
                        <TableCell><strong>ACTION</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => (
                        <TableRow key={index}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell sx={{ color: getStatusColor(order.status), fontWeight: "bold" }}>
                            {order.status}
                            </TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                            <Link component="button" color="primary" underline="none"  
                                onClick={(event) => {
                                    event.preventDefault()
                                    onclickOnOrder(order.id)}
                                }>
                                {order.action} →
                            </Link>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                </Box>
        
              </Box>
            );
    
          case "Add Products":
            return (
                <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 3,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                  margin: '0 auto',
                }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 5 }}>
                  Add Products
                </Typography>
          
                <Grid container spacing={3}>
                  {/* Left side - Image upload */}
                  <Grid item xs={12} md={5}>
                    <Box sx={{ textAlign: 'center' }}>
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <FormLabel>Product Images</FormLabel>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: 'none' }}
                          id="product-images-upload"
                          multiple
                        />

                        <label htmlFor="product-images-upload" style={{padding:"25px"}}>
                          <Button variant="contained" component="span" fullWidth>
                            Upload Images
                          </Button>
                        </label>
                      </FormControl>

          
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {/* Main Image (Full Width) */}
                        <Card sx={{ width: "100%", maxWidth: 400, mb: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={productImages.length > 0 ? URL.createObjectURL(productImages[0]) : ""}
                            alt="Main Product Image"
                            sx={{ objectFit: "cover" }}
                        />
                        </Card>

                        {/* Other Images (Thumbnails) */}
                        {productImages.length > 1 && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
                            {productImages.slice(1).map((image, index) => (
                            <Card sx={{ width: 80, height: 80, cursor: "pointer" }} key={index}>
                                <CardMedia
                                component="img"
                                image={URL.createObjectURL(image)}
                                alt={`Thumbnail ${index + 1}`}
                                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </Card>
                            ))}
                        </Box>
                        )}
                        </Box>


                    </Box>
                  </Grid>
          
                  {/* Right side - Product information */}
                  <Grid item xs={12} md={7} padding={2}>
                    {/* Product Name */}
                    <TextField
                    fullWidth
                    label="Product Name"
                    variant="outlined"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    />

                    {/* Product Description */}
                    <TextField
                    fullWidth
                    label="Product Description"
                    variant="outlined"
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    multiline
                    rows={4}
                    />

                    {/* Product Price */}
                    <TextField
                    fullWidth
                    type="number"
                    label="Product Price"
                    variant="outlined"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    />

                    <Autocomplete
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    value={product.category}
                    onChange={handleCategoryChange}
                    renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
                    sx={{ mb: 2 }}
                    />

                    {/* Product Stock */}
                    <TextField
                    fullWidth
                    type="number"
                    label="Product Stock"
                    variant="outlined"
                    name="stock"
                    value={product.stock}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    />

                    {/* Status Toggle */}
                    <ToggleButtonGroup
                    value={product.status}
                    exclusive
                    onChange={handleStatusChange}
                    sx={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        border: "1px solid #1976d2",
                        mb: 2
                    }}
                    >
                    <ToggleButton value="active" sx={{ textTransform: "none", px: 3, "&.Mui-selected": { backgroundColor: "primary.main", color: "white" }}}>
                        Active
                    </ToggleButton>

                    <ToggleButton value="inactive" sx={{ textTransform: "none", px: 3, "&.Mui-selected": { backgroundColor: "primary.main", color: "white" }}}>
                        Inactive
                    </ToggleButton>
                    </ToggleButtonGroup>
          
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      fullWidth
                    >
                      {isLoading ? <CircularProgress size={24} /> : 'Upload Product'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
    
          case "Add Offeres":
            return (
              <Box>
                <Typography variant="h5" fontWeight="bold">
                    Add Offeres
                </Typography>
                <Typography>Your shopping cart is currently empty.</Typography>
              </Box>
            );
    
          case "Add Ads":
            return (
                <Box>
                <Typography variant="h5" fontWeight="bold">
                    Add Ads
                </Typography>
                <Typography>Your shopping cart is currently empty.</Typography>
              </Box>
            );
    
          case "User Orders":
            return (
                <Box>
                <Typography variant="h5" fontWeight="bold">
                    User Orders
                </Typography>
                <Typography>Your shopping cart is currently empty.</Typography>
              </Box>
            );
        
          case "LogOut": 
            return (
                <Typography>
                    logout
                </Typography>
            )
          default:
            return null;
        }
      };


  return (
    
    <Box display="flex">
      {/* Sidebar */}
      <Box sx={{paddingTop: 3}}>
        <Paper elevation={2} sx={{ p: 2, height: "80%"}}>
            <Box width={250} bgcolor="#f8f9fa" padding={2}>
                <Box display="flex" flexDirection="column" gap={1} justifyContent={"flex-start"}>
                    <Button startIcon={<List />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Dashboard")}>Dashboard</Button>
                    <Button startIcon={<List />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Add Products")}>Add Products</Button>
                    <Button startIcon={<ShoppingCart />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Add Offeres")}>Add Offeres</Button>
                    <Button startIcon={<LocationOn />} sx={{ justifyContent: "flex-start" }} onClick={() => setSelectedOption("Add Ads")}>Add Ads</Button>
                    <Button startIcon={<AccountCircle />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("User Orders")}>User Orders</Button>
                    <Button startIcon={<LogoutIcon />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("LogOut")}>LogOut</Button>
                </Box>
            </Box>
        </Paper>
      </Box>



      {/* Main Content */}
      <Box flex={1} p={3}>
        {renderContent()}
      </Box>

    </Box>
  );
}

export default AdminDashboard