import React, { useState } from 'react';
import { Container, Typography, Box, Button, Backdrop, CircularProgress } from '@mui/material';

const BackdropPage = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Backdrop Examples
            </Typography>

            <Box mb={4}>
                <Typography variant="h6">Basic Backdrop</Typography>
                <Button onClick={handleOpen}>Show backdrop</Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                    <Box ml={2}>Loading...</Box>
                </Backdrop>
            </Box>

            <Box mb={4}>

            </Box>
        </Container>
    );
};

export default BackdropPage;
