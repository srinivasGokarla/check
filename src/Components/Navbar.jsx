import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./Nav.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState} from "react-router";
import { InputBase } from '@mui/material';
import data from'../data.json';


import { styled, alpha } from '@mui/material/styles';
//console.log(data)
const axios = require("axios");





const settings = ['Profile', 'Account', 'Shortlist', 'Logout', 'Your orders', 'Your Account'];

const PrimarySearchAppBar = () => {
 
  const[search,setSearch]=React.useState("");
  const[value,setValue]=React.useState([])
console.log(search)
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight : "30%",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  

  return (
    <AppBar position="static">
      <Container className="top" maxWidth="xl">
        <Toolbar disableGutters>
      
      

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
           
           
          </Box>
        
        
        
          <Typography
          className="logo" 
            variant="p"
            noWrap
            component="div"
            color="black"
            style={{ width: "300px", height: "60px" }}
            classNameName="chimp"
            sx={{ ml: 4, mt: 3,mr: 7, display: { xs: "none", md: "flex" } }}
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2016/10/SnapDeal_logo_logotype.png"
              alt=""
            />
          </Typography>
       
       
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            onChange={(e)=>(setSearch(e.target.value))}
            
            
            />
          </Search>
        
          <Typography
            variant="p"
            noWrap
            component="div"
            color="white"
            classNameName="chimp"
            sx={{ ml: 6,mr: 4, display: { xs: "none", md: "flex" } }}
     
          >Cart
            <ShoppingCartOutlinedIcon   />
          </Typography>
         
         

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account" className="acco">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              Sign In
             
              <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', colors: 'white'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}
                 onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <div className="da">
        {data.mens.filter((e)=>{
      
      if(search==""){
        return "";
      }
      
        else {
          const res = e.title
           .toLowerCase()
            .includes(search.toLowerCase());
            console.log(res.title)
          return res;
        }

      
    }).map((e,i)=>{
      return (
      <div key={i}>
         <div className="flexx">
                  <div className="shadoww">
                    <div className="Rest">
                      <div>
                        {" "}
                        <img src={e.ratingimage} alt="" />
                      </div>
                      <div>
                        <h5 className="name">{e.description}</h5>
                        <h5 className="add">{e.title}</h5>
                        <div className="list">
                          <h5>Min ₹{e.discounted_price} </h5>
                         
                          <li className="upto">Upto 10 discounted_price</li>
                        </div>
                       
                      
                     
                    </div>
                   
                  </div>
                </div>
              </div>
       
        
        <hr/>
        </div>
      )
    })
  }
  </div>
      </Container>
    </AppBar>
    
  );
};
export default PrimarySearchAppBar;
