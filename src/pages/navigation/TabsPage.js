import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Grid } from '@mui/material';

const TabsPage = () => {
    const [value, setValue] = useState(0);
    const [primaryValue, setPrimaryValue] = useState(0);
    const [secondaryValue, setSecondaryValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePrimaryChange = (event, newValue) => {
        setPrimaryValue(newValue);
    };

    const handleSecondaryChange = (event, newValue) => {
        setSecondaryValue(newValue);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Tabs Examples
            </Typography>

            {/* Basic Tabs */}
            <Box mb={4}>
                <Typography variant="h6">Basic Tabs</Typography>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Tab One" />
                    <Tab label="Tab Two" />
                    <Tab label="Tab Three" />
                </Tabs>
                <Box p={3}>
                    {value === 0 && <Typography>Tab One Content</Typography>}
                    {value === 1 && <Typography>Tab Two Content</Typography>}
                    {value === 2 && <Typography>Tab Three Content</Typography>}
                </Box>
            </Box>

            {/* Secondary */}
            <Box mb={4}>
                <Typography variant="h6">Secondary Tabs</Typography>
                <Tabs value={value} onChange={handleChange} indicatorColor='secondary'>
                    <Tab label="Tab One" />
                    <Tab label="Tab Two" />
                    <Tab label="Tab Three" />
                </Tabs>
                <Box p={3}>
                    {value === 0 && <Typography>Tab One Content</Typography>}
                    {value === 1 && <Typography>Tab Two Content</Typography>}
                    {value === 2 && <Typography>Tab Three Content</Typography>}
                </Box>
            </Box>
        </Container>
    );
};

export default TabsPage;
