<<<<<<< HEAD
import React from 'react'
import { alpha, IconButton, InputBase, Stack, styled, Typography, useTheme } from '@mui/material'
=======

import React from 'react'
import {
  alpha,
  IconButton,
  InputBase,
  Stack,
  styled,
  useTheme,
  Box,
  useMediaQuery,
} from '@mui/material'
>>>>>>> 049d23a (second device)
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
<<<<<<< HEAD
import { Delete } from '@mui/icons-material';
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
=======
>>>>>>> 049d23a (second device)
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
<<<<<<< HEAD
import './Navbar.css'

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
=======
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
// @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: 64,
  justifyContent: 'center',
>>>>>>> 049d23a (second device)
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
<<<<<<< HEAD
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
=======
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
>>>>>>> 049d23a (second device)
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
<<<<<<< HEAD
    // vertical padding + font size from searchIcon
=======
>>>>>>> 049d23a (second device)
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Navbar = ({ handleDrawerOpen, open, mode }) => {
<<<<<<< HEAD
  const them = useTheme();
  return (
    <AppBar position="fixed"
      // @ts-ignore
      open={open}>
      <Toolbar>
        <div className='nav-flex'>
          <Stack direction='row'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Stack>
          <div className="nav-icons">
            {them.palette.mode === "light" ?
              <IconButton aria-label="delete" size="large" color='inherit' onClick={() => {
                localStorage.setItem("currentMode" , "dark")
                mode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
              }}>
                <LightModeOutlinedIcon fontSize="inherit" />
              </IconButton> :
              <IconButton aria-label="delete" size="large" color='inherit' onClick={() => {
                localStorage.setItem("currentMode" , "light")
                mode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
              }}>
                <DarkModeOutlinedIcon fontSize="inherit" />
              </IconButton>}


            <IconButton aria-label="delete" size="large" color='inherit'>
              <NotificationsOutlinedIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large" color='inherit'>
              <SettingsOutlinedIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large" color='inherit'>
              <Person2OutlinedIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>



      </Toolbar>
    </AppBar>
  )
}

export default Navbar
=======
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" 
// @ts-ignore
    open={open}>
      <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
        {/* يسار */}
        <Stack direction="row" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { marginRight: 2 },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>

        {/* يمين */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* زر الوضع */}
          <IconButton color='inherit' onClick={() => {
            const newMode = theme.palette.mode === "light" ? "dark" : "light";
            localStorage.setItem("currentMode", newMode);
            mode((prev) => (prev === "light" ? "dark" : "light"));
          }}>
            {theme.palette.mode === "light"
              ? <LightModeOutlinedIcon />
              : <DarkModeOutlinedIcon />}
          </IconButton>

          {/* تظهر فقط على الشاشات الكبيرة */}
          {!isSmall && (
            <>
              <IconButton color='inherit'><NotificationsOutlinedIcon /></IconButton>
              <IconButton color='inherit'><SettingsOutlinedIcon /></IconButton>
              <IconButton color='inherit'><Person2OutlinedIcon /></IconButton>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
>>>>>>> 049d23a (second device)
