import React from 'react';
import { Container, FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';

const SelectPage = () => {
    const [simpleSelect, setSimpleSelect] = React.useState('');
    const [primarySelect, setPrimarySelect] = React.useState('');
    const [secondarySelect, setSecondarySelect] = React.useState('');
    const [filledSelect, setfilledSelect] = React.useState('');

    const handleSimpleChange = (event) => {
        setSimpleSelect(event.target.value);
    };

    const handlePrimaryChange = (event) => {
        setPrimarySelect(event.target.value);
    };

    const handleSecondaryChange = (event) => {
        setSecondarySelect(event.target.value);
    };

    const handleFilledChange = (event) => {
        setfilledSelect(event.target.value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Select Input Examples
            </Typography>

            <Box mb={4}>
                <FormControl fullWidth variant="standard">
                    <InputLabel>Simple Select</InputLabel>
                    <Select
                        value={simpleSelect}
                        onChange={handleSimpleChange}
                        label="Simple Select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Option 1</MenuItem>
                        <MenuItem value={20}>Option 2</MenuItem>
                        <MenuItem value={30}>Option 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box mb={4}>
                <FormControl fullWidth variant="outlined" color="primary">
                    <InputLabel>Primary Select</InputLabel>
                    <Select
                        value={primarySelect}
                        onChange={handlePrimaryChange}
                        label="Primary Select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Option 1</MenuItem>
                        <MenuItem value={20}>Option 2</MenuItem>
                        <MenuItem value={30}>Option 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box mb={4}>
                <FormControl fullWidth variant="outlined" color="secondary">
                    <InputLabel>Secondary Select</InputLabel>
                    <Select
                        value={secondarySelect}
                        onChange={handleSecondaryChange}
                        label="Secondary Select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Option 1</MenuItem>
                        <MenuItem value={20}>Option 2</MenuItem>
                        <MenuItem value={30}>Option 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box mb={4}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Filled Select</InputLabel>
                    <Select
                        value={filledSelect}
                        onChange={handleFilledChange}
                        label="Filled Select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Option 1</MenuItem>
                        <MenuItem value={20}>Option 2</MenuItem>
                        <MenuItem value={30}>Option 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    );
};

export default SelectPage;
