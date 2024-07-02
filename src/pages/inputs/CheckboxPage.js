import React, { useState } from 'react';
import { Container, Typography, FormControlLabel, Checkbox, Box, FormGroup, FormControl, FormLabel } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CheckboxPage = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [checked, setChecked] = useState({
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });

    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Checkbox Examples
            </Typography>

            {/* Basic Checkboxes */}
            <Box mb={4}>
                <Typography variant="h6">Basic Checkboxes</Typography>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={checked.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Primary"
                    />
                    <FormControlLabel
                        control={<Checkbox color="secondary" checked={checked.checkedB} onChange={handleChange} name="checkedB" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={<Checkbox color="info" checked={checked.checkedC} onChange={handleChange} name="checkedC" />}
                        label="Info"
                    />
                    <FormControlLabel
                        control={<Checkbox color="success" checked={checked.checkedD} onChange={handleChange} name="checkedD" />}
                        label="Success"
                    />
                    <FormControlLabel
                        control={<Checkbox color="error" checked={checked.checkedE} onChange={handleChange} name="checkedE" />}
                        label="Error"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checked.checkedF} onChange={handleChange} name="checkedF" disabled />}
                        label="Disabled"
                    />
                </FormGroup>
            </Box>

            {/* Checkboxes with icons */}
            <Box mb={4}>
                <Typography variant="h6">Checkboxes with Icons</Typography>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
            </Box>
        </Container>
    );
};

export default CheckboxPage;
