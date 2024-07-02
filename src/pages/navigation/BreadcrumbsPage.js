import React from 'react';
import { Container, Typography, Box, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const BreadcrumbsPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Breadcrumbs Examples
            </Typography>

            {/* Basic Breadcrumbs */}
            <Box mb={4}>
                <Typography variant="h6">Basic Breadcrumbs</Typography>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Getting Started
                    </Link>
                    <Typography color="textPrimary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Box>

            {/* Breadcrumbs with Custom Separator */}
            <Box mb={4}>
                <Typography variant="h6">Breadcrumbs with Custom Separator</Typography>
                <Breadcrumbs separator="›">
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Getting Started
                    </Link>
                    <Typography color="textPrimary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Box>

            {/* Breadcrumbs with Icons */}
            <Box mb={4}>
                <Typography variant="h6">Breadcrumbs with Icons</Typography>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="medium" />}>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        <HomeIcon />
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        <WhatshotIcon />
                        Getting Started
                    </Link>
                    <Typography color="textPrimary">
                        <GrainIcon />
                        Breadcrumbs
                    </Typography>
                </Breadcrumbs>
            </Box>


            {/* Collapsed Breadcrumbs */}
            <Box mb={4}>
                <Typography variant="h6">Collapsed Breadcrumbs</Typography>
                <Breadcrumbs maxItems={3} itemsAfterCollapse={2} itemsBeforeCollapse={1}>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Getting Started
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Installation 1
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Installation 2
                    </Link>
                    <Link underline="hover" color="inherit" href="/breadcrumbs">
                        Installation 3
                    </Link>
                    <Typography color="textPrimary">Current</Typography>
                </Breadcrumbs>
            </Box>
        </Container>
    );
};

export default BreadcrumbsPage;
