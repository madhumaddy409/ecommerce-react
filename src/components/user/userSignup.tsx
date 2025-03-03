import React, { SyntheticEvent, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Tabs,
  Tab,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
function UserSignup() {
  const [tabValue, setTabValue] = useState("signIn");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Handle Tab Change (SignIn/SignUp)
  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  // SignIn Handler
  const signIn = () => {
    console.log("sign in trying ===>", userEmail, userPassword);
  }

  // Google Login Handler
  const googleLogin = async () => {
    try {
      // Get Google login URL from the backend
      const response = await axios.get("http://localhost:8000/login"); // Replace with your backend route
      const loginUrl = response.data.url;

      // Redirect user to Google login page
      window.location.href = loginUrl;
    } catch (error) {
      console.error("Failed to get Google login URL:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box sx={{ padding: "60px", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "67vh", backgroundColor: "#f9f9f9" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={3} lg={3}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 3 }}>
            <CardContent>
              {/* Tabs for SignIn / SignUp */}
              <Tabs value={tabValue} onChange={handleTabChange} centered>
                <Tab label="Sign In" value="signIn" />
                <Tab label="Sign Up" value="signUp" />
              </Tabs>

              <Divider sx={{ my: 2 }} />

              {/* Conditional Form Rendering based on tabValue */}
              {tabValue === "signIn" && (
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type={passwordVisible ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setPasswordVisible(!passwordVisible)}>
                            {passwordVisible ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <Typography variant="body2" color="primary" sx={{ textAlign: "right", mb: 2, cursor: "pointer" }} onClick={() => setTabValue("forgetPassword")}>
                    Forget Password?
                  </Typography>
                  <Button variant="contained" color="warning" fullWidth sx={{ fontWeight: "bold", marginBottom: 2 }} onClick={signIn}>
                    SIGN IN →
                  </Button>
                </Box>
              )}

              {/* Social Login Buttons */}
              <Divider sx={{ marginY: 2 }}>or</Divider>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth sx={{ textTransform: "none", justifyContent: "center" }} onClick={googleLogin}>
                  {tabValue === "signIn" ? "Login with Google" : "Sign up with Google"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserSignup;
