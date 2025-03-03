import { Box, Divider, Grid, Step, StepLabel, Stepper, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import VerifiedIcon from '@mui/icons-material/Verified';
import EventNoteIcon from '@mui/icons-material/EventNote';


function OrderDetails() {
     // Step labels and status
  const steps = [
    { label: "Order Placed", icon: <CheckCircleIcon color="success" /> },
    { label: "Packaging", icon: <Inventory2OutlinedIcon color="primary" /> },
    { label: "On The Road", icon: <LocalShippingIcon color="action" /> },
    { label: "Delivered", icon: <DoneAllIcon color="action" /> },
  ];

  const orderActivity = [
    {
      icon: <BeenhereIcon fontSize="large" sx={{color:'#2DB224'}}/>,
      activity: "Your order has been delivered. Thank you for shopping at Clicon!",
      time: "23 Jan, 2021 at 7:32 PM",
      color: "#EAF7E9"
    },
    {
      icon: <LocalShippingIcon fontSize="large" sx={{color:'#2DA5F3'}}/>,
      activity: "Our delivery man (John Wick) has picked up your order for delivery.",
      time: "23 Jan, 2021 at 7:32 PM",
      color: "#EAF6FE"
    },
    {
      icon: <VerifiedIcon fontSize="large" sx={{color:'#2DA5F3'}}/>,
      activity: "Your order has reached at last mile hub.",
      time: "23 Jan, 2021 at 7:32 PM",
      color: "#EAF6FE"
    },
    {
      icon: <CheckCircleIcon fontSize="large" sx={{color:'#2DB224'}}/>,
      activity: "Your order is successfully verified.",
      time: "23 Jan, 2021 at 7:32 PM",
      color: "#EAF7E9"
    },
    {
      icon: <EventNoteIcon fontSize="large" sx={{color:'#2DA5F3'}}/>,
      activity: "Your order has been confirmed.",
      time: "24 Jan, 2021 at 7:32 PM",
      color: "#EAF6FE"
    },
  ];

  // Current step (set dynamically based on status)
  const currentStep = 1;

  return (
    <Box sx={{ padding: "25px", display: "flex", flexDirection: "column", minHeight: "75vh"}}>
        <Grid container spacing={2}  justifyContent="center" padding={6}>
            <Grid item sm={12} md={8} padding={2} sx={{border: "1px solid black"}}>
                <Box sx={{padding: "25px", backgroundColor:"#FDFAE7"}}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                            <Typography variant="subtitle1" color="textPrimmary" fontWeight={"bold"}>
                            #96459761
                            </Typography>
                            <Typography variant="subtitle2" color="textPrimmary">
                            4 Products Order Placed in 17 Jan, 2021 at 7:32 PM
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={6} sx={{textAlign: "right"}}>
                            <Typography variant="h5" sx={{ fontWeight: "bold", color: "primary.main" }}>
                            $1199.00
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{padding: "25px"}}>
                <Typography variant="subtitle2" color="textPrimary" mb={2}>
                    Order expected arrival <strong>23 Jan, 2021</strong>
                </Typography>

                {/* Stepper */}
                <Stepper
                    alternativeLabel
                    activeStep={currentStep}
                    sx={{
                    "& .MuiStepIcon-root.Mui-active": { color: "orange" },
                    "& .MuiStepIcon-root.Mui-completed": { color: "green" },
                    }}
                >
                    {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel
                        icon={step.icon}
                        StepIconComponent={() => (
                            <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                            >
                            {step.icon}
                            <Typography
                                variant="caption"
                                sx={{ marginTop: "5px", color: index === currentStep ? "red" : "gray" }}
                            >
                                {step.label}
                            </Typography>
                            </Box>
                        )}
                        />
                    </Step>
                    ))}
                </Stepper>
                </Box>
                <Box padding={2}>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="subtitle1" fontWeight={"bold"} pl={1}>Order Activity</Typography>
                <Box sx={{ padding: "25px" }}>
                    {orderActivity.map((activity, index) => (
                        <Box key={index} sx={{ marginBottom: 3 }}>
                        <Grid container spacing={2}>
                            {/* Icon Section */}
                            <Grid
                            item
                            sm={12}
                            md={1}
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
                            <Grid item sm={12} md={11} pb={2}>
                            <Typography
                                variant="subtitle2"
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
                </Box>

            </Grid>
        </Grid>
    </Box>
  )
}

export default OrderDetails