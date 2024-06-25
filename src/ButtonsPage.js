import React from 'react';
import { Button, Typography } from '@mui/material';

const ButtonsPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Buttons Page
            </Typography>
            <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary Button
            </Button>
        </div>
    );
};

export default ButtonsPage;
