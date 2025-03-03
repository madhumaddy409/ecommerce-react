import React, { useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Menu, MenuItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { fetchCategories } from '../../services/categories';
import { useDispatch, UseDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addCategoryList } from '../../store/category/category-slice';

const HeaderRoute = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  // ✅ Only fetch when `open` is true
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    enabled: false, // Don't fetch automatically on mount
  });


  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    refetch(); // ✅ Fetch categories when the menu opens
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (categoryName: string) => {
    navigate(`/category?name=${encodeURIComponent(categoryName)}`);
    handleMenuClose();
  };

   // Dispatch data when it's available
   useEffect(() => {
    if (data) {
      dispatch(addCategoryList(data)); // ✅ Dispatch categories to Redux
    }
  }, [data, dispatch]); // Runs whenever `data` changes

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f8f8f8',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* All Categories Dropdown */}
      <Box>
        <Button
          sx={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '8px 16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
          onClick={handleMenuClick}
          startIcon={<MenuIcon />}
        >
          All Categories
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            sx: { width: 250 },
          }}
        >
          {isLoading && (
            <MenuItem disabled>
              <ListItemText primary="Loading..." />
            </MenuItem>
          )}

          {error && (
            <MenuItem disabled>
              <ListItemText primary="Error fetching categories" />
            </MenuItem>
          )}

          {data?.map((category: { category_name: string }, index: number) => (
            <MenuItem key={index} onClick={() => handleCategorySelect(category.category_name)}>
              <ListItemText primary={category.category_name} />
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Middle Tabs */}
      <Box sx={{ display: 'flex', alignItems: 'left', gap: 4 }}>
        <Button sx={{ color: '#555', textTransform: 'none' }} onClick={() => navigate('/product/track/order')}>
          Track Order
        </Button>
        <Button sx={{ color: '#555', textTransform: 'none' }}>Customer Support</Button>
        <Button sx={{ color: '#555', textTransform: 'none' }}>Need Help</Button>
      </Box>

      {/* Right Contact Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ListItemText sx={{ color: '#555' }}>Call Support</ListItemText>
      </Box>
    </Box>
  );
};

export default HeaderRoute;
