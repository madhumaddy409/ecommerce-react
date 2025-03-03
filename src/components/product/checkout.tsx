import { Box, Checkbox, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Country, State, City } from "country-state-city";
  
import React, { useEffect, useState } from 'react';

interface CountryOption {
    value: string;
    label: string;
}

interface StateOption {
    value: string;
    label: string;
}

interface CityOption {
    value: string;
    label: string;
}

function Checkout() {
    const [checkout, setCheckout] = useState([
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
      const [checkoutProducts, setCheckoutProducts] = useState({});

      const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        addressLine: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        email: '',
        phoneNumber: '',
    });

    const [countries, setCountries] = useState<CountryOption[]>([]);
    const [states, setStates] = useState<StateOption[]>([]);
    const [cities, setCities] = useState<CityOption[]>([]);

    useEffect(() => {
        const countryOptions = Country.getAllCountries().map((country) => ({
            value: country.isoCode,
            label: country.name,
        }));
        setCountries(countryOptions);
    }, []);

    useEffect(() => {
        if (address.country) {
            const stateOptions = State.getStatesOfCountry(address.country).map((state) => ({
                value: state.isoCode,
                label: state.name,
            }));
            setStates(stateOptions);
        }
    }, [address.country]);

    useEffect(() => {
        if (address.state) {
            const cityOptions = City.getCitiesOfState(address.country, address.state).map((city) => ({
                value: city.name,
                label: city.name,
            }));
            setCities(cityOptions);
        }
    }, [address.state, address.country]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // payment calculation part
    const subTotal = checkout.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const discount = 24; // Hardcoded discount value
    const shippingCharge = 0;
    const tax = (subTotal - discount) * 0.2; // Assuming a 20% tax rate
    const total = subTotal - discount + tax + shippingCharge;
    

    const placeOrder = (total : number, subTotal : number, shippingCharge: number, discount: number) => {
        const checkProductDeatils = {
            checkout,
            subTotal,
            shippingCharge,
            discount,
            total
        }
        setCheckoutProducts(checkProductDeatils);
    }

    console.log(address,"==>")

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
                    <Box sx={{ padding: "25px" }}>
                        {/* Billing Information */}
                        <Box sx={{ marginBottom: 4 }}>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                Billing Information
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="First name"
                                        variant="outlined"
                                        name="firstName"
                                        value={address.firstName}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Last name"
                                        variant="outlined"
                                        name="lastName"
                                        value={address.lastName}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Company Name (Optional)"
                                        variant="outlined"
                                        name="companyName"
                                        value={address.companyName}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        variant="outlined"
                                        name="addressLine"
                                        value={address.addressLine}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        variant="outlined"
                                        select
                                        name="country"
                                        value={address.country}
                                        onChange={handleInputChange}
                                        SelectProps={{
                                            MenuProps: {
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 300, // Set maximum height of dropdown menu
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {countries.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Region/State"
                                        variant="outlined"
                                        select
                                        name="state"
                                        value={address.state}
                                        onChange={handleInputChange}
                                        SelectProps={{
                                            MenuProps: {
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 300, // Set maximum height of dropdown menu
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {states.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="City"
                                        variant="outlined"
                                        select
                                        name="city"
                                        value={address.city}
                                        onChange={handleInputChange}
                                        SelectProps={{
                                            MenuProps: {
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 300, // Set maximum height of dropdown menu
                                                    },
                                                },
                                            },
                                        }}
                                    >
                                        {cities.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Zip Code"
                                        variant="outlined"
                                        name="zipCode"
                                        value={address.zipCode}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        value={address.email}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        variant="outlined"
                                        name="phoneNumber"
                                        value={address.phoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Ship to a different address"
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        {/* Additional Information */}
                        <Box>
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                Additional Information
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Notes about your order, e.g. special notes for delivery"
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                </Grid>


            <Grid item xs={12} md={4}>
            <Box
                sx={{
                border: "1px solid #77878F",
                borderRadius: 2,
                marginBottom: 2,
                }}
                padding={2}
            >
                {/* Order Summary Header */}
                <Typography variant="h6" padding={1}>
                Order Summary
                </Typography>

                {/* Cart Items */}
                {checkout.map((cart) => (
                <Grid
                    key={cart.id}
                    container
                    spacing={2}
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                    }}
                >
                    <Grid item>
                    <img
                        src={cart.image}
                        alt={cart.name}
                        style={{ width: 50, height: 50, borderRadius: 4 }}
                    />
                    </Grid>
                    <Grid item xs>
                    <Typography variant="subtitle2">{cart.name}</Typography>
                    <Typography color="#5F6C72">
                        {cart.quantity} x ${cart.price.toFixed(2)}
                    </Typography>
                    </Grid>
                </Grid>
                ))}


                    {/* Subtotal, Shipping, Discount, Tax */}
                    <Box>
                        <Grid container justifyContent="space-between" paddingY={1}>
                        <Typography>Sub-total</Typography>
                        <Typography>${subTotal.toFixed(2)}</Typography>
                        </Grid>
                        <Grid container justifyContent="space-between" paddingY={1}>
                        <Typography>Shipping</Typography>
                        <Typography>{shippingCharge ? shippingCharge : "Free"}</Typography>
                        </Grid>
                        <Grid container justifyContent="space-between" paddingY={1}>
                        <Typography>Discount</Typography>
                        <Typography>-${discount.toFixed(2)}</Typography>
                        </Grid>
                        <Grid container justifyContent="space-between" paddingY={1}>
                        <Typography>Tax</Typography>
                        <Typography>${tax.toFixed(2)}</Typography>
                        </Grid>

                        {/* Horizontal Divider */}
                        <Box
                        sx={{
                            height: "1px",
                            backgroundColor: "#E0E0E0",
                            marginY: 2,
                        }}
                        />

                        {/* Total */}
                        <Grid
                        container
                        justifyContent="space-between"
                        sx={{ fontWeight: "bold", paddingY: 2 }}
                        >
                        <Typography>Total</Typography>
                        <Typography>${total.toFixed(2)} USD</Typography>
                        </Grid>
                    </Box>

                {/* Place Order Button */}
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                <button
                    style={{
                    backgroundColor: "#FFA500",
                    border: "none",
                    color: "#FFF",
                    padding: "12px 20px",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontWeight: "bold",
                    width: "100%",
                    }}
                    onClick={() => placeOrder(total, subTotal, shippingCharge, discount)}
                >
                    PLACE ORDER →
                </button>
                </Box>
            </Box>
            </Grid>

                        
        </Grid>
        </Box>
        
    </Box>
  )
}

export default Checkout