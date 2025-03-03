import { Box, IconButton, InputBase, Avatar, Typography } from '@mui/material';
import { Search, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"; // Import useNavigate

import HeaderRoute from './headerRoute';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// Define the type for the user object
interface User {
  profile_picture_url: string; // Replace with your exact key names
  first_name?: string; // Example of additional properties (optional)
  email?: string;
}

const Header = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userName, setUsername] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const userSignUp = () => {
    navigate("/user/signUp"); // Navigate to the desired route
  }

  const userAccoount = () => {
    navigate("/user/dashboard");
  }

  const homePage = () => {
    navigate("/");
  }

  const { user } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    setUsername(user.firstName)
    // Fetch profile image from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: User = JSON.parse(storedUser); // Specify User type
        setProfileImage(user.profile_picture_url || ""); // Assign the profile picture URL
        setUsername(user.first_name || ""); // Assign the profile picture URL
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);


  return (
    <Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1B6392', // Custom header background color (blue example)
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Left side: Logo or Image */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" // Replace with your logo path or an image URL
          alt="Logo"
          style={{ height: '70PX', borderRadius: 2}}
          onClick={() => { homePage() }}
        />
      </Box>

      {/* Middle: Search Box */}
      <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            padding: '0 10px',
            borderRadius: '20px',
            width: '100%',
          }}
        >
          <Search />
          <InputBase
            placeholder="Search…"
            sx={{
              marginLeft: 1,
              flex: 1,
              fontSize: '14px',
              height: '35px',
            }}
          />
        </Box>
      </Box>

      {/* Right side: Cart Icon, User Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* username */}
        <Typography variant="subtitle1" color="textPrimary" fontWeight="bold">
            Welcome... {userName}
        </Typography>
        {/* Cart Icon */}
        <IconButton>
          <ShoppingCart />
        </IconButton>

        {/* User Profile */}
        <IconButton onClick={ profileImage ? userAccoount : userSignUp}>
        <Avatar sx={{ width: 32, height: 36 }} src={ profileImage || ""}>
          {profileImage  && <AccountCircle />} {/* Fallback Icon */}
        </Avatar>
        </IconButton>
      </Box>
    </Box>
    <HeaderRoute />
    </Box>
  );
};

export default Header;
