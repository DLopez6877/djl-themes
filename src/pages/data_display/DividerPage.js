import React from 'react';
import { Container, Typography, Box, Divider, Grid } from '@mui/material';

const DividerPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Divider Examples
            </Typography>

            {/* Basic Divider */}
            <Box mb={4}>
                <Typography variant="h6">Basic Divider</Typography>
                <Divider />
            </Box>

            {/* Divider with Text */}
            <Box mb={4}>
                <Typography variant="h6">Divider with Text</Typography>
                <Divider>Text</Divider>
            </Box>

            {/* Vertical Divider */}
            <Box mb={4}>
                <Typography variant="h6">Vertical Divider</Typography>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Box>Left Content</Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs>
                        <Box>Right Content</Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Inset Divider */}
            <Box mb={4}>
                <Typography variant="h6">Inset Divider</Typography>
                <Divider variant="inset" />
            </Box>

            {/* Middle Divider */}
            <Box mb={4}>
                <Typography variant="h6">Middle Divider</Typography>
                <Divider variant="middle" />
            </Box>
        </Container>
    );
};

export default DividerPage;
