import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CryptoCoins from './CryptoCoins';
import { Link } from 'react-router-dom';
import { contentStyle } from '../Styles/ContentStyles';
import cryptoIconImage from '../images/cryptoIcon.png';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [coinsPageOpen, setCoinsPageOpen] = useState(false);
  const { classes } = contentStyle();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCryptoCurrency = () => {
    setCoinsPageOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className={classes.appbarColor} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.fontOnly} >
            Cryptoverse
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{sx: {background: "#0A1929", color: "#ffffff"}}}
        elevation={1}
      >
        <DrawerHeader>
          <img src={cryptoIconImage} width="40px" height="40px"/>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon color="primary"/> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem key="Home" disablePadding>
              <ListItemButton component={Link} to="/CRYPTOVERSE/" onClick={handleDrawerClose}>
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Cryptocurrencies" disablePadding>
              <ListItemButton component={Link} to='/cryptocurrencies' onClick={handleDrawerClose}>
                <ListItemIcon>
                  <PaidIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Cryptocurrencies" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Exchanges" disablePadding>
              <ListItemButton component={Link} to='/exchanges' onClick={handleDrawerClose}>
                <ListItemIcon>
                  <CurrencyExchangeIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Exchanges" />
              </ListItemButton>
            </ListItem>
            <ListItem key="News" disablePadding>
              <ListItemButton component={Link} to='/news'onClick={handleDrawerClose}>
                <ListItemIcon>
                  <NewspaperIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
        </List>

        
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>

      {coinsPageOpen && <CryptoCoins/>}
    </Box>
  );
}