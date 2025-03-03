import React, { useState, useEffect  } from 'react';
import { Box, Grid, Typography, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Slider, FormGroup, Checkbox, Card, CardMedia, CardContent, Button, MenuItem, Select, CircularProgress, Alert } from '@mui/material';
import { useSearchParams } from "react-router-dom";
import { fetchCategoryProducts } from '../../services/products/products';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../../services/categories';


// const categories = ["Electronics", "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone", "Mobile Accessories"];
const priceRanges = ["All Price", "Under $20", "$25 to $100", "$100 to $300", "$300 to $500", "$500 to $1,000", "$1,000 to $10,000"];
const brands = ["Apple", "Microsoft", "Dell", "Symphony", "Sony", "LG", "One Plus", "Google", "Samsung", "HP"];

function CategoryList() {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("name") || "";
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromURL);
  const [selectedCategoryId, setSelectedCategoryId] = useState<Number | 1>(1);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [selectedPrice, setSelectedPrice] = useState<string>("All Price");
  const [checked, setChecked] = useState<string[]>(["Apple"]);
  const [value, setValue] = useState<[number, number]>([20, 80]);


  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as [number, number]); // This casts the newValue as a tuple of two numbers.
  };

  const handlePriceChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedPrice(event.target.value);
  };

     // Handle change event for checkbox
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setChecked(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value) // If already checked, uncheck it
        : [...prev, value]                    // Else, check it
    );
  };

  const handleSortChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSortBy(event.target.value);
  };

  const onSelectCategory = (categoryName: string, categoryId: Number) => {
    // setting category name for the category header
    setSelectedCategory(categoryName)
    setSelectedCategoryId(categoryId);
    
  }

    // ✅ fetch categoriesd for categories list check box
    const { data: categories, isLoading, error, refetch } = useQuery({
      queryKey: ["categories"],
      queryFn: fetchCategories,
    });

    const { data: products, isLoading: isLoadingProducts, error: productsError } = useQuery({
      queryKey: ["categoryProducts", selectedCategoryId],
      queryFn: () => fetchCategoryProducts(Number(selectedCategoryId) || 0), // Use Number() to convert to primitive number
      // enabled: selectedCategoryId !== null, // Only fetch products if categoryId is set
    });
    

    // Update state if URL parameter changes
    useEffect(() => {
      setSelectedCategory(categoryFromURL);
    }, [categoryFromURL]);


  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {/* Sidebar Filters */}
        <Grid item xs={12} md={2}>
          <Box>
            {/* Categories */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Category</Typography>
            {isLoading && <CircularProgress />}
            {error && <Alert severity="error">Failed to load categories</Alert>}
            {categories && (
              <FormControl>
                <RadioGroup defaultValue={selectedCategory} name="category">
                  {categories.map((category: { category_name: string; category_id: Number}, index: number) => (
                    <FormControlLabel key={index} value={category.category_name} control={<Radio />} label={category.category_name} onClick={() => onSelectCategory(category.category_name, category.category_id)} />
                  ))}
                </RadioGroup>
              </FormControl>
            )}



            {/* Price Range */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Price Range</Typography>
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                marks={[{ value: 0, label: '$0' }, { value: 50, label: '$50' }, { value: 100, label: '$100' }]}
              />
              <RadioGroup value={selectedPrice} onChange={handlePriceChange}>
                {priceRanges.map((price, index) => (
                  <FormControlLabel key={index} value={price} control={<Radio />} label={price} />
                ))}
              </RadioGroup>
            </Box>

            {/* Popular Brands */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Popular Brands</Typography>
              <FormGroup sx={{display: "flux", fluxDirection: "columns",gap: "2", height: "350px"}}>
                {brands.map((brand, index) => (
                  <FormControlLabel 
                    key={index}
                    control={
                      <Checkbox
                        value={brand}
                        checked={checked.includes(brand)}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label={brand}
                  />
                ))}
              </FormGroup>
            </Box>
          </Box>
        </Grid>

        {/* Product Grid */}
        <Grid item xs={12} md={10}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h5" fontWeight="bold">{selectedCategory}</Typography>
            <FormControl>
              <Select value={sortBy} onChange={handleSortChange}>
                <MenuItem value="Most Popular">Most Popular</MenuItem>
                <MenuItem value="Best Deals">Best Deals</MenuItem>
                <MenuItem value="Highest Rated">Highest Rated</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {!isLoadingProducts && (
            <Grid container spacing={3}> 

            {productsError && <Alert severity="error">Failed to load categories</Alert>}
            {products?.length < 1 && (
              <Grid item xs={12} sm={12} md={6} lg={6} maxWidth={12}>

                <Alert severity="info" sx={{ width: '100%', padding: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    No products are available for <span style={{ color: '#3f51b5' }}>{selectedCategory}</span>.
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1, color: 'textSecondary' }}>
                    Try selecting a different category or check back later.
                  </Typography>
                </Alert>
              </Grid>
            )}

            {products?.map((product: { name: string, description: string, price: number, image_url: string}, index : number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={product.image_url}
                    alt={""}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>           
          )}

        </Grid>
      </Grid>
    </Box>
  );
}

export default CategoryList;
