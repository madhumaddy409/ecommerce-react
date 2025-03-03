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

function EmailVerification() {
            const [tabValue, setTabValue] = useState("emailVerification");
            const [VerificationCode, setVerificationCode] = useState("");
          
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
            {tabValue === "emailVerification" && (
                <Box>
                <Typography
                    variant="h5"
                    sx={{
                    fontWeight: "bold",
                    mb: 2,
                    textAlign: "center",
                    }}
                >
                    Verify Your Email Address
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                    mb: 3,
                    textAlign: "center",
                    }}
                >
                    Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu, tristique a eu in diam.
                </Typography>
                  {/* Resend Code Button aligned to the right */}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Typography
                      variant="body2"
                      component="span"
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    >
                      Resend Code
                    </Typography>
                  </Box>
                <TextField
                    label="VerificationCode"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type={ "text"}
                />
                <Box padding={2}>
                    <Button
                        variant="contained"
                        color="warning"
                        fullWidth
                        sx={{ fontWeight: "bold", marginBottom: 2 }}
                    >
                        RESET PASSWORD →
                    </Button>
                    </Box>
                </Box>
            )}
            </CardContent>
        </Card>
        </Grid>
    </Grid>
    </Box>
  )
}

export default EmailVerification