import React, { useState } from 'react';
import { Container, Typography, Box, Button, Snackbar, Alert, Grid } from '@mui/material';

const SnackbarPage = () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');

    const handleClick = (severity) => {
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Snackbar Examples
            </Typography>

            {/* Basic Snackbar */}
            <Box mb={4}>
                <Typography variant="h6">Basic Snackbar</Typography>
                <Button variant="outlined" onClick={() => handleClick('success')}>
                    Open Snackbar
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="This is a basic snackbar"
                />
            </Box>

            {/* Snackbar with Different Severities */}
            <Box mb={4}>
                <Typography variant="h6">Snackbar with Different Severities</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleClick('success')}>
                            Success
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleClick('error')}>
                            Error
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleClick('warning')}>
                            Warning
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleClick('info')}>
                            Info
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        This is a {severity} snackbar
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    );
};

export default SnackbarPage;
