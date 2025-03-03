import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Avatar, Button, TableHead, TableBody, TableRow, TableCell, Link, Table, TableContainer, Divider, TextField, InputAdornment, IconButton } from "@mui/material";
import { ShoppingCart, AccountCircle, LocationOn, List, VisibilityOff, Visibility } from "@mui/icons-material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OrderDetails from "../product/orderDetails";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutIcon from '@mui/icons-material/Logout';


const UserDashboard = () => {

    const [selectedOption, setSelectedOption] = useState("Dashboard");
    const [selectedOrderDetails, setSelectedOrderDetails] = useState(false);
    const userSession = localStorage.getItem("user");
    const userInfo = userSession ? JSON.parse(userSession) : "";
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmedPasswordVisible, setConfirmedPasswordVisible] = useState(false);
    const [userPassword, setUserPassword] = useState("");



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
            <OrderDetails />
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
    
          case "Order History":
            return (
                selectedOrderDetails ? renderOrderDetails() : <Box>
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
            );
    
          case "Shopping Cart":
            return (
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Shopping Cart
                </Typography>
                <Typography>Your shopping cart is currently empty.</Typography>
              </Box>
            );
    
          case "Billing Address":
            return (
              <Box sx={{padding: 2}}>
                <Box display="flex" justifyContent="flex-start">
                    <Typography variant="subtitle1" fontWeight="bold" padding={2}>
                    Payment Option
                    </Typography>
                    <Link variant="subtitle1" component="button" color="primary" underline="none" sx={{paddingLeft: "75%"}}
                                        onClick={(event) => {
                                            onclickAddCardr()}
                                        }>
                                    Add Card →
                    </Link>
                </Box>
                
                <Box sx={{padding: 2}}>
                    {/* === Payment Option Row === */}
                    <Grid container spacing={2} sx={{ mb: 2}} padding={2} gap={4}>
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
                            <Typography variant="h6" sx={{ letterSpacing: 2 }} padding={2}>
                                **** **** **** 3621
                            </Typography>
                    
                            {/* Order Status & Name */}
                            <Typography variant="body1" pt={2}>Kevin Gilbert</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                                Order: #92643621 - In Progress
                            </Typography>
                            </Paper>
                        </Grid>

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
                            <Typography variant="h6" sx={{ letterSpacing: 2 }} padding={2}>
                                **** **** **** 3621
                            </Typography>
                    
                            {/* Order Status & Name */}
                            <Typography variant="body1" pt={2}>Kevin Gilbert</Typography>
                            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
                                Order: #92643621 - In Progress
                            </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* Account Info & Billing Info */}
                    <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={2} sx={{ p: 2, height: "100%" }}>
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
                        <Paper elevation={2} sx={{ p: 2, height: "100%" }}>
                        <Typography variant="h6">Shipping Address</Typography>
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
                    </Grid>
                </Box>

              </Box>
            );
    
          case "Profile":
            return (
              <Box>
                {/* profile setting */}
                <Box sx={{padding: 2,border: "1px solid black", borderRadius: 4}} >
                    <Box sx={{padding: 2}}>
                    <Typography variant="h5" fontWeight="bold">
                    Profile Settings
                    </Typography>
                    </Box>

                    <Grid container spacing={2} gap={2}>
                        <Grid item md={2} sm={12} lg={2} padding={4}>
                            <img src={userInfo.profile_picture_url}  width="180" height="180" style={{ borderRadius: '50%'}}/>
                        </Grid>
                        {/* user setting */}
                        <Grid item md={4} sm={12} lg={4.5} display="flex" flexDirection="column" gap={1}>
                            <TextField id="outlined-basic" label="Display Name" value= "" variant="outlined" />
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Country/Region" variant="outlined" />
                            <Button variant="contained" sx={{ mt: 2, width: "40%" }}>
                            Save Changes
                            </Button>
                        </Grid>
                        <Grid item md={4} sm={12} lg={4.5} display="flex" flexDirection="column" gap={1}>
                            <TextField id="outlined-basic" label="Username" variant="outlined" />
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            <Grid item md={12} sm={12} lg={12} display="flex" flexDirection="row" gap={2}>
                                <TextField id="outlined-basic" label="States" variant="outlined" fullWidth/>
                                <TextField id="outlined-basic" label="Zip Code" variant="outlined" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider sx={{mt:5}}></Divider>

                    {/* address section */}
                    <Box sx={{display: "flex" }} gap={70} padding={4} pl={10}>
                    <Typography variant="subtitle1" fontWeight="bold">Billing Address</Typography>
                    <Typography variant="subtitle1" fontWeight="bold">Shipping Addresss</Typography>
                    </Box>
                    
                    <Grid container spacing={2} padding={2} gap={1}>
                        <Grid item md={5} sm={12} lg={5.5} display="flex" flexDirection="column" gap={2}>
                            <Grid item md={12} sm={12} lg={12} display="flex" flexDirection="row" gap={2}> 
                                <TextField id="outlined-basic" label="First Name" value= "" variant="outlined" fullWidth/>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
                            </Grid>

                            <TextField id="outlined-basic" label="Company Name (Optional)" variant="outlined" />
                            <TextField id="outlined-basic" label="Address" variant="outlined" />
                            <TextField id="outlined-basic" label="Country" variant="outlined" />
                            <TextField id="outlined-basic" label="Region/State" variant="outlined" />
                            <Grid item md={12} sm={12} lg={12} display="flex" flexDirection="row" gap={2}> 
                                <TextField id="outlined-basic" label="City" variant="outlined" fullWidth/>
                                <TextField id="outlined-basic" label="Zip Code" variant="outlined" fullWidth/>
                            </Grid> 
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            <Button variant="contained" sx={{ mt: 2, width: "40%" }}>
                            Save Changes
                            </Button>
                        </Grid>
                        <Grid item md={2} sm={12} lg={5.5} display="flex" flexDirection="column" gap={2}>
                            <Grid item md={12} sm={12} lg={12} display="flex" flexDirection="row" gap={2}> 
                                <TextField id="outlined-basic" label="First Name" value= "" variant="outlined" fullWidth/>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth/>
                            </Grid>

                            <TextField id="outlined-basic" label="Company Name (Optional)" variant="outlined" />
                            <TextField id="outlined-basic" label="Address" variant="outlined" />
                            <TextField id="outlined-basic" label="Country" variant="outlined" />
                            <TextField id="outlined-basic" label="Region/State" variant="outlined" />
                            <Grid item md={12} sm={12} lg={12} display="flex" flexDirection="row" gap={2}> 
                                <TextField id="outlined-basic" label="City" variant="outlined" fullWidth/>
                                <TextField id="outlined-basic" label="Zip Code" variant="outlined" fullWidth/>
                            </Grid> 
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            <Button variant="contained" sx={{ mt: 2, width: "40%" }}>
                            Save Changes
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider sx={{mt:5}}>
                        <Typography variant="subtitle2" color="secondary">
                            Change Password
                        </Typography>
                    </Divider>

                    {/* password change */}
                    <Grid  item md={5} lg={6} padding={2} width="50%">
                        <TextField
                        label="Current Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={currentPasswordVisible ? "text" : "password"}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton onClick={() => setCurrentPasswordVisible(!currentPasswordVisible)}>
                                {currentPasswordVisible ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        ),
                        }}
                        onChange={(e) => setUserPassword(e.target.value)}
                        />

                        <TextField
                            label="New Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={newPasswordVisible ? "text" : "password"}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton onClick={() => setNewPasswordVisible(!newPasswordVisible)}>
                                    {newPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                            onChange={(e) => setUserPassword(e.target.value)}
                            />

                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={confirmedPasswordVisible ? "text" : "password"}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton onClick={() => setConfirmedPasswordVisible(!confirmedPasswordVisible)}>
                                    {confirmedPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />

                        <Button variant="contained" sx={{ mt: 2, width: "40%"}}>
                            Save Changes
                        </Button>
                    </Grid>
                    
                    

                </Box>
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
                    <Button startIcon={<List />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Order History")}>Order History</Button>
                    <Button startIcon={<ShoppingCart />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Shopping Cart")}>Shopping Cart</Button>
                    <Button startIcon={<LocationOn />} sx={{ justifyContent: "flex-start" }} onClick={() => setSelectedOption("Billing Address")}>Billing Address</Button>
                    <Button startIcon={<AccountCircle />} sx={{ justifyContent: "flex-start" }}  onClick={() => setSelectedOption("Profile")}>Profile</Button>
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
};

export default UserDashboard;
