import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, useTheme } from '@mui/material';

const ThemeSwitcher = ({ currentTheme, setTheme, sx }) => {
    const handleChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <FormControl
            fullWidth
            variant="outlined"
            margin="normal"
            sx={{
                maxWidth: "400px",
                ...sx,
            }}
        >
            <InputLabel>Theme</InputLabel>
            <Select value={currentTheme} onChange={handleChange} label="Theme">
                <MenuItem value="sequoia">Sequoia</MenuItem>
                <MenuItem value="apollo">Apollo</MenuItem>
                <MenuItem value="masculinePastel">Masculine Pastel</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ThemeSwitcher;
