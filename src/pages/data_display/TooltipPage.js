import React from 'react';
import { Container, Typography, Box, Tooltip, Button, Grid } from '@mui/material';

const TooltipPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Tooltip Examples
            </Typography>

            {/* Basic Tooltip */}
            <Box mb={4}>
                <Typography variant="h6">Basic Tooltip</Typography>
                <Tooltip title="Delete">
                    <Button>Delete</Button>
                </Tooltip>
            </Box>

            {/* Tooltip with Different Positions */}
            <Box mb={4}>
                <Typography variant="h6">Tooltip with Different Positions</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Tooltip title="Add" placement="top">
                            <Button>Top</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add" placement="right">
                            <Button>Right</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add" placement="bottom">
                            <Button>Bottom</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Add" placement="left">
                            <Button>Left</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>

            {/* Tooltip with Arrow */}
            <Box mb={4}>
                <Typography variant="h6">Tooltip with Arrow</Typography>
                <Tooltip title="Delete" arrow>
                    <Button>Delete</Button>
                </Tooltip>
            </Box>

            {/* Disabled Tooltip */}
            <Box mb={4}>
                <Typography variant="h6">Disabled Tooltip</Typography>
                <Tooltip title="Delete" disabled>
                    <Button>Delete</Button>
                </Tooltip>
            </Box>
        </Container>
    );
};

export default TooltipPage;
