import React from 'react';
import { Container, Typography, Box, Skeleton, Grid } from '@mui/material';

const SkeletonPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Skeleton Examples
            </Typography>

            {/* Basic Skeleton */}
            <Box mb={4}>
                <Typography variant="h6">Basic Skeleton</Typography>
                <Skeleton />
            </Box>

            {/* Skeleton with Different Variants */}
            <Box mb={4}>
                <Typography variant="h6">Skeleton with Different Variants</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Skeleton variant="text" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Skeleton variant="rectangular" width={210} height={118} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Skeleton variant="circular" width={40} height={40} />
                    </Grid>
                </Grid>
            </Box>

            {/* Skeleton with Animation */}
            <Box mb={4}>
                <Typography variant="h6">Skeleton with Animation</Typography>
                <Skeleton animation="wave" />
                <Skeleton animation="pulse" />
                <Skeleton animation={false} />
            </Box>
        </Container>
    );
};

export default SkeletonPage;
