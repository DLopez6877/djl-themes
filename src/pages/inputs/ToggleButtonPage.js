import React, { useState } from 'react';
import { Container, Typography, Box, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const ToggleButtonPage = () => {
    const [alignment, setAlignment] = useState('left');
    const [formats, setFormats] = useState(() => ['bold']);
    const [colorToggle, setColorToggle] = useState('primary');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleColorToggle = (event, newColorToggle) => {
        setColorToggle(newColorToggle);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Toggle Button Examples
            </Typography>

            {/* Basic Toggle Button */}
            <Box mb={4}>
                <Typography variant="h6">Basic Toggle Button</Typography>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="center aligned">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Multiple Toggle Buttons */}
            <Box mb={4}>
                <Typography variant="h6">Multiple Toggle Buttons</Typography>
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            {/* Color Toggle Buttons */}
            <Box mb={4}>
                <Typography variant="h6">Color Toggle Buttons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <ToggleButtonGroup
                            value={colorToggle}
                            exclusive
                            onChange={handleColorToggle}
                            aria-label="color toggle"
                        >
                            <ToggleButton value="primary" color="primary" aria-label="primary">
                                Primary
                            </ToggleButton>
                            <ToggleButton value="secondary" color="secondary" aria-label="secondary">
                                Secondary
                            </ToggleButton>
                            <ToggleButton value="success" color="success" aria-label="success">
                                Success
                            </ToggleButton>
                            <ToggleButton value="error" color="error" aria-label="error">
                                Error
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ToggleButtonPage;
