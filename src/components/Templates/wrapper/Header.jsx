import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const drawerWidth = 240;

function Header(props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                        <Button onClick={() => navigate("/")} sx={{ color: 'black' }}>Home</Button>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                        <Button sx={{ color: 'black' }}>Sign In</Button>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                        <Button sx={{ color: 'black' }}>Sign Up</Button>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: 'whitesmoke',
                    height: '100px',
                }}
            >

                <Toolbar sx={{
                    height: '100px',
                }}>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none', color: 'black' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'black' } }}
                    >
                        Bike Store
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button onClick={() => navigate("/")} sx={{ color: 'black' }}>Home </Button>
                        <Button onClick={() => navigate("/sign-in")} sx={{ color: 'black' }}>Sign In</Button>
                        <Button onClick={() => navigate("/sign-up")} sx={{ color: 'black' }}>Sign Up</Button>
                        <Button
                            size="medium" sx={{ color: 'yellowgreen' }}
                            onClick={() => navigate("/shopping-cart")}>
                            <AddShoppingCartIcon fontSize='large' />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 1 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;
