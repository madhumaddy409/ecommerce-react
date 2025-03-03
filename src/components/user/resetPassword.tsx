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

function ResetPassword() {
        const [tabValue, setTabValue] = useState("resetPassword");
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
                    {tabValue === "resetPassword" && (
                        <Box>
                        <Typography
                            variant="h5"
                            sx={{
                            fontWeight: "bold",
                            mb: 2,
                            textAlign: "center",
                            }}
                        >
                            Reset Password
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                            mb: 3,
                            textAlign: "center",
                            }}
                        >
                            Duis sagittis molestie tellus, at eleifend sapien pellentesque quis. Fusce lorem nunc, fringilla sit amet nunc.
                        </Typography>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={passwordVisible ? "text" : "password"}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setPasswordVisible((prev) => !prev)}
                                >
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type={confirmPasswordVisible ? "text" : "password"}
                            InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                    setConfirmPasswordVisible((prev) => !prev)
                                    }
                                >
                                    {confirmPasswordVisible ? (
                                    <VisibilityOff />
                                    ) : (
                                    <Visibility />
                                    )}
                                </IconButton>
                                </InputAdornment>
                            ),
                            }}
                        />
                        <Button
                            variant="contained"
                            color="warning"
                            fullWidth
                            sx={{ fontWeight: "bold", marginBottom: 2 }}
                        >
                            RESET PASSWORD →
                        </Button>
                        </Box>
                    )}
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </Box>
  )
}

export default ResetPassword