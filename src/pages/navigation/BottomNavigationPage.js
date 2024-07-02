import React, { useState } from 'react';
import { Container, Typography, Box, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BottomNavigationPage = () => {
    const [value, setValue] = useState(0);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Bottom Navigation Examples
            </Typography>

            {/* Basic Bottom Navigation */}
            <Box mb={4}>
                <Typography variant="h6">Basic Bottom Navigation</Typography>
                (look down)
                <Paper elevation={3} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </Container>
    );
};

export default BottomNavigationPage;
