import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Slider, Input, Grid } from '@mui/material';

const SliderPage = () => {
    const [value, setValue] = useState(30);
    const [rangeValue, setRangeValue] = useState([20, 50]);
    const [primaryValue, setPrimaryValue] = useState(50);
    const [secondaryValue, setSecondaryValue] = useState(50);
    const [successValue, setSuccessValue] = useState(50);
    const [errorValue, setErrorValue] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleRangeSliderChange = (event, newValue) => {
        setRangeValue(newValue);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    const handlePrimarySliderChange = (event, newValue) => {
        setPrimaryValue(newValue);
    };

    const handleSecondarySliderChange = (event, newValue) => {
        setSecondaryValue(newValue);
    };

    const handleSuccessSliderChange = (event, newValue) => {
        setSuccessValue(newValue);
    };

    const handleErrorSliderChange = (event, newValue) => {
        setErrorValue(newValue);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Slider Examples
            </Typography>

            {/* Basic Slider */}
            <Box mb={4}>
                <Typography variant="h6">Basic Slider</Typography>
                <Slider value={value} onChange={handleSliderChange} aria-labelledby="basic-slider" />
                <Box mt={2}>
                    <Typography>Value: {value}</Typography>
                </Box>
            </Box>

            {/* Slider with Input */}
            <Box mb={4}>
                <Typography variant="h6">Slider with Input</Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider value={value} onChange={handleSliderChange} aria-labelledby="input-slider" />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Range Slider */}
            <Box mb={4}>
                <Typography variant="h6">Range Slider</Typography>
                <Slider
                    value={rangeValue}
                    onChange={handleRangeSliderChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={100}
                />
                <Box mt={2}>
                    <Typography>
                        Range Value: {rangeValue[0]} - {rangeValue[1]}
                    </Typography>
                </Box>
            </Box>

            {/* Color Sliders */}
            <Box mb={4}>
                <Typography variant="h6">Color Sliders</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Primary</Typography>
                        <Slider value={primaryValue} onChange={handlePrimarySliderChange} color="primary" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Secondary</Typography>
                        <Slider value={secondaryValue} onChange={handleSecondarySliderChange} color="secondary" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Success</Typography>
                        <Slider value={successValue} onChange={handleSuccessSliderChange} color="success" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle1">Error</Typography>
                        <Slider value={errorValue} onChange={handleErrorSliderChange} color="error" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SliderPage;
