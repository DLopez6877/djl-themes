import React, { useState } from 'react';
import { Container, Typography, Box, Pagination, Grid } from '@mui/material';

const PaginationPage = () => {
    const [page, setPage] = useState(1);
    const [primaryPage, setPrimaryPage] = useState(1);
    const [secondaryPage, setSecondaryPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handlePrimaryChange = (event, value) => {
        setPrimaryPage(value);
    };

    const handleSecondaryChange = (event, value) => {
        setSecondaryPage(value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Pagination Examples
            </Typography>

            {/* Basic Pagination */}
            <Box mb={4}>
                <Typography variant="h6">Basic Pagination</Typography>
                <Pagination count={10} page={page} onChange={handleChange} />
            </Box>

            {/* Pagination with Different Colors */}
            <Box mb={4}>
                <Typography variant="h6">Pagination with Different Colors</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="body">Primary</Typography>
                        <Pagination count={10} page={primaryPage} onChange={handlePrimaryChange} color="primary" />
                    </Grid>
                    <Grid item>
                        <Typography variant="body">Secondary</Typography>
                        <Pagination count={10} page={secondaryPage} onChange={handleSecondaryChange} color="secondary" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default PaginationPage;
