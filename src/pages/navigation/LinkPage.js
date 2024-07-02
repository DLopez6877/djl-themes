import React from 'react';
import { Container, Typography, Box, Link, Grid } from '@mui/material';

const LinkPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Link Examples
            </Typography>

            {/* Basic Link */}
            <Box mb={4}>
                <Typography variant="h6">Basic Link</Typography>
                <Link href="#">This is a basic link</Link>
            </Box>

            {/* Secondary Link */}
            <Box mb={4}>
                <Typography variant="h6">Secondary Link</Typography>
                <Link href="#" color="secondary">This is a secondary link</Link>
            </Box>

            {/* No Underline Link */}
            <Box mb={4}>
                <Typography variant="h6">No Underline Link</Typography>
                <Link href="#" underline="none">
                    This is a no underline link
                </Link>
            </Box>

            {/* Hover Underline Link */}
            <Box mb={4}>
                <Typography variant="h6">Hover Underline Link</Typography>
                <Link href="#" underline="hover">
                    This is a hover underline link
                </Link>
            </Box>
        </Container>
    );
};

export default LinkPage;
