// import React, { useState } from 'react';
// import { Box, Grid, Typography, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Slider,FormGroup , Checkbox, Card, CardMedia, CardContent, Button } from '@mui/material';

// const categories: string[] = ["Electronics Devices", "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone", "Mobile Accessories"];
// const categoriesPriceRange: string[] = ["All Price","Under $20","$25 to $100","$100 to $300","$300 to $500","$500 to $1,000","$1,000 to $10,000"];
// const categoriesBrand: string[] = ["Apple","Microsoft","Dell","Symphony","Sony","LG","One Plus","Google","Samsung","HP"];
// const productData = [
//     {
//       title: "New Google Pixel 6 Pro",
//       description: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//       discount: "29% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Google Pixel 6 Pro",
//     },
//     {
//       title: "New Samsung Galaxy S22",
//       description: "Enjoy superfast performance with this incredible phone.",
//       discount: "20% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Samsung Galaxy S22",
//     },
//     {
//       title: "Apple iPhone 14",
//       description: "Experience ultimate design and performance.",
//       discount: "15% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Apple iPhone 14",
//     },
//     {
//       title: "Dell XPS 13 Laptop",
//       description: "Compact and powerful, perfect for productivity.",
//       discount: "10% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Dell XPS 13",
//     },
//     {
//       title: "Dell XPS 13 Laptop",
//       description: "Compact and powerful, perfect for productivity.",
//       discount: "10% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Dell XPS 13",
//     },
//     {
//       title: "Dell XPS 13 Laptop",
//       description: "Compact and powerful, perfect for productivity.",
//       discount: "10% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Dell XPS 13",
//     },
//     {
//       title: "Dell XPS 13 Laptop",
//       description: "Compact and powerful, perfect for productivity.",
//       discount: "10% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Dell XPS 13",
//     },
//     {
//       title: "Dell XPS 13 Laptop",
//       description: "Compact and powerful, perfect for productivity.",
//       discount: "10% OFF",
//       image: "https://via.placeholder.com/150", // Replace with actual product image
//       alt: "Dell XPS 13",
//     },
//   ];

// function CategoryList() {
//     const [value, setValue] = useState<[number, number]>([20, 80]);
//     const [selectedPrice, setSelectedPrice] = useState<string>("All Price");
//     const [checked, setChecked] = useState<string[]>(["Apple"]);

//     const handleChange = (_event: Event, newValue: number | number[]) => {
//       setValue(newValue as [number, number]); // This casts the newValue as a tuple of two numbers.
//     };


//     // Handle change event for radio button
//     const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedPrice(event.target.value);
//     };

//      // Handle change event for checkbox
//   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setChecked(prev => 
//       prev.includes(value)
//         ? prev.filter(item => item !== value) // If already checked, uncheck it
//         : [...prev, value]                    // Else, check it
//     );
//   };


//   return (
//     <Box sx={{ padding: 3}}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={2} pt={2} pb={2}  sx={{ 
//             display: "flux", 
//             fluxDriection: "row" }}>
//             <Grid sx = {{ borderBottom: '2px solid black', paddingBottom: "15px" }}>
//                 <FormControl>
//                     <FormLabel id="category-label">CATEGORY</FormLabel>
//                     <RadioGroup
//                     aria-labelledby="category-label"
//                     defaultValue={categories[0]}
//                     name="radio-buttons-group"
//                     >
//                     {
//                         categories.map((item, index) => (
//                         <FormControlLabel
//                             key={index}  // Adding a key for each FormControlLabel element
//                             value={item}
//                             control={<Radio />}
//                             label={item}
//                         />
//                         ))
//                     }
//                     </RadioGroup>
//                 </FormControl>
//             </Grid>

//             <Grid sx={{ borderBottom: '2px solid black', paddingTop: "15px", paddingBottom: "15px" }}>
//                 <FormLabel id="category-label">Price Range: ${value[0]} - ${value[1]}</FormLabel>
//                 <Slider
//                     value={value}
//                     onChange={handleChange}
//                     valueLabelDisplay="auto"
//                     min={0}
//                     max={100}
//                     marks={[
//                     { value: 0, label: '$0' },
//                     { value: 50, label: '$50' },
//                     { value: 100, label: '$100' },
//                     ]}
//                 />

//                 <FormControl component="fieldset">
//                         <RadioGroup
//                         value={selectedPrice}                // Set the current selected value
//                         onChange={handleRadioChange}          // Update value on change
//                         aria-label="price-range"
//                         name="price-range"
//                         >
//                         {categoriesPriceRange.map((price, index) => (
//                             <FormControlLabel
//                             key={index}                         // key for the list items
//                             value={price}                       // Value for each option
//                             control={<Radio />}                 // Radio button component
//                             label={price}                       // Price label
//                             />
//                         ))}
//                         </RadioGroup>
//                     </FormControl>
//             </Grid>

//             <Grid sx={{ borderBottom: '2px solid black',
//                 paddingTop: "15px" }}>
//                 <FormLabel id="category-label" sx={{ textTransform: 'uppercase' }}>popular Brands</FormLabel>
//                 <FormGroup sx={{
//                         display: 'flex', 
//                         fluxDriection: 'columns',    // Allow wrapping when items overflow
//                         gap: '2px',
//                         height: "350px"         // Gap between items
//                     }}>
//                     {categoriesBrand.map((brand, index) => (
//                     <FormControlLabel
//                         key={index}
//                         control={
//                         <Checkbox
//                             value={brand}                     // value for each checkbox
//                             checked={checked.includes(brand)}  // If the price is in the 'checked' array, it is checked
//                             onChange={handleCheckboxChange}    // Handle check/uncheck
//                         />
//                         }
//                         label={brand}

//                     />
//                     ))}
//                 </FormGroup>
//             </Grid>
//         </Grid>

//             {/* Category product list */}
//             <Grid item xs={12} md={10} container spacing={2}>
//                 {productData.map((product, index) => (
//                     <Grid item xs={12} sm={6} md={3} key={index}>
//                     <Card sx={{ height: "100%"}}>
//                         <CardMedia
//                         component="img"
//                         height="200"
//                         // image={product.image} // Replace with product image
//                         image="https://images.hgmsites.net/hug/2021-toyota-corolla_100752492_h.jpg"
//                         alt={product.alt}
//                         />
//                         <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1, height: "50%" }}>
//                         <Typography variant="subtitle2" sx={{ marginBottom: "8px" }}>
//                             SUMMER SALES
//                         </Typography>
//                         <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "8px" }}>
//                             {product.title}
//                         </Typography>
//                         <Typography
//                             variant="body1"
//                             color="primary"
//                             fontWeight="bold"
//                             sx={{ marginBottom: "8px" }}
//                         >
//                             {product.discount}
//                         </Typography>
//                         <Typography variant="subtitle2" color="text.secondary" fontWeight="bold" sx={{ flexGrow: 1 }} height={2}>
//                             {product.description}
//                         </Typography>
//                         </CardContent>
//                     </Card>
//                     </Grid>
//                 ))}
//             </Grid>

                  
//       </Grid>
//     </Box>
//   );
// }

// export default CategoryList;