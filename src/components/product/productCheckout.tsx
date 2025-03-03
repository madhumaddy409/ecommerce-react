import { Box, Grid, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ProductCheckout() {
  return (
    <Box
      sx={{
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        textAlign: "center",
      }}
    >
      {/* Checkmark Icon */}
      <CheckCircleIcon sx={{ fontSize: 60, color: "green", marginBottom: 2 }} />

      {/* Main Text */}
      <Typography
        variant="h6"
        color="textPrimary"
        fontWeight="bold"
        marginBottom={1}
      >
        Your order is successfully placed
      </Typography>

      {/* Description Text */}
      <Typography
        variant="body1"
        color="textSecondary"
        marginBottom={3}
      >
        Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus.
        Donec volutpat mollis nulla non facilisis.
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          color="warning"
          sx={{ fontWeight: "bold", paddingX: 3 }}
        >
          GO TO DASHBOARD
        </Button>
        <Button
          variant="contained"
          color="warning"
          sx={{ fontWeight: "bold", paddingX: 3 }}
        >
          VIEW ORDER →
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCheckout;
