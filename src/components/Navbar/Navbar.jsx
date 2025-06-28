import React from 'react'
import { alpha, IconButton, InputBase, Stack, styled, Typography, useTheme } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import './Navbar.css'

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
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
    // vertical padding + font size from searchIcon
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