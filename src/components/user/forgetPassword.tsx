import React, { SyntheticEvent, useState } from "react";
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



function ForgetPassword() {

    const [tabValue, setTabValue] = useState("forgetPassword");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
    const handleTabChange = (event: SyntheticEvent, newValue: string) => {
      setTabValue(newValue);
    };

  return (
    <Box
    sx={{
        padding: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "67vh",
        backgroundColor: "#f9f9f9",
    }}
    >
    <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={3} lg={3}>
        <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 3 }}>
            <CardContent>

            {tabValue === "forgetPassword" && (
                <Box>
                <Typography
                    variant="h5"
                    sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "center",
                    }}
                >
                    Forget Password
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                    mb: 3,
                    textAlign: "center",
                    }}
                >
                    Enter the email address or mobile phone number associated
                    with your account.
                </Typography>
                <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{ fontWeight: "bold", marginTop: 2, mb: 2 }}
                >
                    SEND CODE →
                </Button>
                <Divider sx={{ my: 2 }} />
                <Typography
                    variant="body2"
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    }}
                >
                    <Typography
                    color="text.secondary"
                    variant="body2"
                    component="span"
                    >
                    Already have an account?
                    </Typography>
                    <Typography
                    variant="body2"
                    component="span"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setTabValue("signIn")}
                    >
                    Sign In
                    </Typography>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 1,
                    }}
                >
                    <Typography
                    color="text.secondary"
                    variant="body2"
                    component="span"
                    >
                    Don’t have an account?
                    </Typography>
                    <Typography
                    variant="body2"
                    component="span"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setTabValue("signUp")}
                    >
                    Sign Up
                    </Typography>
                </Typography>
                </Box>
            )}
            </CardContent>
        </Card>
        </Grid>
    </Grid>
    </Box>
  )
}

export default ForgetPassword