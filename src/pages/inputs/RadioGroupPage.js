import React, { useState } from 'react';
import { Container, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioGroupPage = () => {
    const [value, setValue] = useState('option1');
    const [colorValue, setColorValue] = useState('primary');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleColorChange = (event) => {
        setColorValue(event.target.value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Radio Group Examples
            </Typography>

            {/* Basic Radio Group */}
            <Box mb={4}>
                <Typography variant="h6">Basic Radio Group</Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Options</FormLabel>
                    <RadioGroup value={value} onChange={handleChange}>
                        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Disabled Radio Group */}
            <Box mb={4}>
                <Typography variant="h6">Disabled Radio Group</Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Disabled Options</FormLabel>
                    <RadioGroup value={value} onChange={handleChange}>
                        <FormControlLabel value="disabled1" control={<Radio />} label="Disabled Option 1" disabled />
                        <FormControlLabel value="disabled2" control={<Radio />} label="Disabled Option 2" disabled />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Radio Group with Row Layout */}
            <Box mb={4}>
                <Typography variant="h6">Radio Group with Row Layout</Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Row Layout</FormLabel>
                    <RadioGroup row value={value} onChange={handleChange}>
                        <FormControlLabel value="row1" control={<Radio />} label="Row 1" />
                        <FormControlLabel value="row2" control={<Radio />} label="Row 2" />
                        <FormControlLabel value="row3" control={<Radio />} label="Row 3" />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* Radio Group with Colors */}
            <Box mb={4}>
                <Typography variant="h6">Radio Group with Colors</Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Color Options</FormLabel>
                    <RadioGroup row value={colorValue} onChange={handleColorChange}>
                        <FormControlLabel value="primary" control={<Radio color="primary" />} label="Primary" />
                        <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
                        <FormControlLabel value="info" control={<Radio color="info" />} label="Info" />
                        <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
                        <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Container>
    );
};

export default RadioGroupPage;
