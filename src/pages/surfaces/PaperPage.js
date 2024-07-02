import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const PaperPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Paper Examples
            </Typography>

            {/* Basic Paper */}
            <Box mb={4}>
                <Typography variant="h6">Basic Paper</Typography>
                <Paper elevation={1} sx={{ padding: 2 }}>
                    <Typography variant="body1">
                        This is a basic Paper component with elevation.
                    </Typography>
                </Paper>
            </Box>

            {/* Paper with Different Elevations */}
            <Box mb={4}>
                <Typography variant="h6">Paper with Different Elevations</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Paper elevation={0} sx={{ padding: 2 }}>
                            <Typography variant="body1">Elevation 0</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={3} sx={{ padding: 2 }}>
                            <Typography variant="body1">Elevation 3</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={6} sx={{ padding: 2 }}>
                            <Typography variant="body1">Elevation 6</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={9} sx={{ padding: 2 }}>
                            <Typography variant="body1">Elevation 9</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={12} sx={{ padding: 2 }}>
                            <Typography variant="body1">Elevation 12</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Paper with Rounded Corners */}
            <Box mb={4}>
                <Typography variant="h6">Paper with Rounded Corners</Typography>
                <Paper elevation={3} sx={{ padding: 2, borderRadius: '16px' }}>
                    <Typography variant="body1">
                        This Paper component has rounded corners.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default PaperPage;
