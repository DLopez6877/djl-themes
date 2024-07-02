import React, { useState } from 'react';
import { Container, Typography, Box, Button, Menu, MenuItem } from '@mui/material';

const MenuPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Menu Examples
            </Typography>

            {/* Basic Menu */}
            <Box mb={4}>
                <Typography variant="h6">Basic Menu</Typography>
                <Button variant="outlined" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Box>
        </Container>
    );
};

export default MenuPage;
