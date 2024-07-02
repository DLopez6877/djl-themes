import React from 'react';
import { Container, Typography, Box, Badge, Grid, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BadgePage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Badge Examples
            </Typography>

            {/* Basic Badge */}
            <Box mb={4}>
                <Typography variant="h6">Basic Badge</Typography>
                <Badge badgeContent={4} color="primary">
                    <MailIcon />
                </Badge>
            </Box>

            {/* Badge with Different Colors */}
            <Box mb={4}>
                <Typography variant="h6">Badge with Different Colors</Typography>
                <Grid container spacing={4}>
                    <Grid item>
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Box>

            {/* Badge with Max Count */}
            <Box mb={4}>
                <Typography variant="h6">Badge with Max Count</Typography>
                <Grid container spacing={4}>
                    <Grid item>
                        <Badge badgeContent={99} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={100} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={1000} max={999} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Box>

            {/* Badge Visibility */}
            <Box mb={4}>
                <Typography variant="h6">Badge Visibility</Typography>
                <Grid container spacing={4}>
                    <Grid item>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={0} color="primary" showZero>
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={0} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Box>

            {/* Color Badges */}
            <Box mb={4}>
                <Typography variant="h6">Color Badges</Typography>
                <Grid container spacing={4}>
                    <Grid item>
                        <Badge badgeContent={4} color="primary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="success">
                            <MailIcon />
                        </Badge>
                    </Grid>
                    <Grid item>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BadgePage;
