import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, LinearProgress, CircularProgress, Stack } from '@mui/material';

const ProgressPage = () => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + Math.random() * 10));
            setBuffer((prevBuffer) => (prevBuffer >= 100 ? 10 : prevBuffer + Math.random() * 10));
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Progress Bar Examples
            </Typography>

            <Box mb={4}>
                <Typography variant="h6">Circular Progress Bar</Typography>
                <CircularProgress variant="determinate" value={progress} />
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Circular Color Progress Bar</Typography>
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Linear Progress Bar</Typography>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Linear Color Progress Bar</Typography>
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                </Stack>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Linear Buffer Progress Bar</Typography>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                </Box>
            </Box>

        </Container>
    );
};

export default ProgressPage;