import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import BuildIcon from '@mui/icons-material/Build';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { blue, green, pink, red } from '@mui/material/colors';

const MaterialIconsPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Material Icons Examples
            </Typography>

            {/* Basic Icons */}
            <Box mb={4}>
                <Typography variant="h6">Basic Icons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <HomeIcon />
                    </Grid>
                    <Grid item>
                        <StarIcon />
                    </Grid>
                    <Grid item>
                        <BuildIcon />
                    </Grid>
                    <Grid item>
                        <FavoriteIcon />
                    </Grid>
                </Grid>
            </Box>

            {/* Colored Icons */}
            <Box mb={4}>
                <Typography variant="h6">Custom Colored Icons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <HomeIcon sx={{ color: blue[500] }} />
                    </Grid>
                    <Grid item>
                        <StarIcon sx={{ color: green[500] }} />
                    </Grid>
                    <Grid item>
                        <BuildIcon sx={{ color: pink[500] }} />
                    </Grid>
                    <Grid item>
                        <FavoriteIcon sx={{ color: red[500] }} />
                    </Grid>
                </Grid>
            </Box>

            {/* Large Icons */}
            <Box mb={4}>
                <Typography variant="h6">Large Icons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <HomeIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <StarIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <BuildIcon fontSize="large" />
                    </Grid>
                    <Grid item>
                        <FavoriteIcon fontSize="large" />
                    </Grid>
                </Grid>
            </Box>

            {/* Icon with Labels */}
            <Box mb={4}>
                <Typography variant="h6">Icon with Labels</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <HomeIcon />
                            <Typography variant="body1" ml={1}>
                                Home
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <StarIcon />
                            <Typography variant="body1" ml={1}>
                                Star
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <BuildIcon />
                            <Typography variant="body1" ml={1}>
                                Build
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display="flex" alignItems="center">
                            <FavoriteIcon />
                            <Typography variant="body1" ml={1}>
                                Favorite
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Color Icons */}
            <Box mb={4}>
                <Typography variant="h6">Color Icons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <HomeIcon color="primary" />
                    </Grid>
                    <Grid item>
                        <StarIcon color="secondary" />
                    </Grid>
                    <Grid item>
                        <BuildIcon color="success" />
                    </Grid>
                    <Grid item>
                        <FavoriteIcon color="error" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default MaterialIconsPage;
