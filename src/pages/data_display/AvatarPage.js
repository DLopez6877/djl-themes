import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';

const AvatarPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Avatar Examples
            </Typography>

            {/* Basic Avatar */}
            <Box mb={4}>
                <Typography variant="h6">Basic Avatar</Typography>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </Box>

            {/* Avatar with Icon */}
            <Box mb={4}>
                <Typography variant="h6">Avatar with Icon</Typography>
                <Avatar>
                    <PersonIcon />
                </Avatar>
            </Box>

            {/* Avatar with Custom Colors */}
            <Box mb={4}>
                <Typography variant="h6">Avatar with Custom Colors</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                    </Grid>
                </Grid>
            </Box>

            {/* Avatar Sizes */}
            <Box mb={4}>
                <Typography variant="h6">Avatar Sizes</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
                    </Grid>
                    <Grid item>
                        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" sx={{ width: 48, height: 48 }} />
                    </Grid>
                    <Grid item>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" sx={{ width: 72, height: 72 }} />
                    </Grid>
                </Grid>
            </Box>

            {/* Color Avatars */}
            <Box mb={4}>
                <Typography variant="h6">Color Avatars</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'success.main' }}>C</Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{ bgcolor: 'error.main' }}>D</Avatar>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AvatarPage;
