import React from 'react';
import {
    Container, Typography, Box, Autocomplete, TextField, Checkbox, ListItemText
} from '@mui/material';

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376', region: 'Europe' },
    { code: 'AE', label: 'United Arab Emirates', phone: '971', region: 'Asia' },
    { code: 'AF', label: 'Afghanistan', phone: '93', region: 'Asia' },
    { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268', region: 'North America' },
    { code: 'AI', label: 'Anguilla', phone: '1-264', region: 'North America' },
];

const AutocompletePage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Autocomplete Examples
            </Typography>

            {/* Disabled Items */}
            <Box mb={4}>
                <Typography variant="h6">Disabled Items</Typography>
                <Autocomplete
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    getOptionDisabled={(option) => (
                        option.code === 'AE' || option.code === 'AE'
                    )}
                    renderInput={(params) => <TextField {...params} label="Countries with Disabled Items" />}
                />
            </Box>

            {/* Categorized Items */}
            <Box mb={4}>
                <Typography variant="h6">Categorized Items</Typography>
                <Autocomplete
                    options={countries}
                    groupBy={(option => option.region)}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label="Categorized Countries" />}
                />
            </Box>

            {/* Multiple Values */}
            <Box mb={4}>
                <Typography variant="h6">Multiple Values</Typography>
                <Autocomplete
                    multiple
                    options={countries}
                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label="Multiple Countries" />}
                />
            </Box>

            {/* Items with Checkboxes */}
            <Box mb={4}>
                <Typography variant="h6">Items with Checkboxes</Typography>
                <Autocomplete
                    multiple
                    options={countries}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option, { selected }) => {
                        const { key, ...optionProps } = props;
                        return (
                            <li key={key} {...optionProps}>
                                <Checkbox
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {option.label}
                            </li>
                        )
                    }}
                    renderInput={(params) => <TextField {...params} label="Countries with Checkboxes" />}
                />
            </Box>
        </Container>
    );
};

export default AutocompletePage;
