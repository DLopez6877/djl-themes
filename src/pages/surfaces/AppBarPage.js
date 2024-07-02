import React, { useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, IconButton, Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppBarPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                AppBar Examples
            </Typography>

            {/* Basic AppBar */}
            <Box mb={4}>
                <Typography variant="h6">Basic AppBar</Typography>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Basic AppBar
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* AppBar with Responsive Menu */}
            <Box mb={4}>
                <Typography variant="h6">AppBar with Responsive Menu</Typography>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Responsive AppBar
                        </Typography>
                        {isMobile ? (
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                            </Menu>
                        ) : (
                            <>
                                <Button color="inherit">Profile</Button>
                                <Button color="inherit">My account</Button>
                                <Button color="inherit">Logout</Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};

export default AppBarPage;
