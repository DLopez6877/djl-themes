import React from 'react';
import { Container, Typography, Box, Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

const FloatingActionBarPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Floating Action Button Examples
            </Typography>

            {/* Basic Floating Action Button */}
            <Box mb={4}>
                <Typography variant="h6">Basic Floating Action Button</Typography>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>

            {/* Floating Action Button with Secondary Color */}
            <Box mb={4}>
                <Typography variant="h6">Floating Action Button with Secondary Color</Typography>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Box>

            {/* Floating Action Button with Extended Label */}
            <Box mb={4}>
                <Typography variant="h6">Floating Action Button with Extended Label</Typography>
                <Fab variant="extended" color="primary" aria-label="navigate">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            </Box>

            {/* Floating Action Button in a Grid */}
            <Box mb={4}>
                <Typography variant="h6">Floating Action Buttons in a Grid</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Fab color="default" aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab color="secondary" aria-label="delete">
                            <DeleteIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Box>

            {/* Color Floating Action Buttons */}
            <Box mb={4}>
                <Typography variant="h6">Color Floating Action Buttons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab color="success" aria-label="favorite">
                            <FavoriteIcon />
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Fab color="error" aria-label="delete">
                            <DeleteIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default FloatingActionBarPage;
