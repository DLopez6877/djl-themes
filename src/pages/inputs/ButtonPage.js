import React from 'react';
import { Typography, Button, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const ButtonPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Primary buttons
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button disabled>Disabled</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Icon left
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Icon right
                </Button>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>

            <Typography variant="h4" gutterBottom>
                Secondary buttons
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                <Button color="secondary" variant="text">Text</Button>
                <Button color="secondary" variant="contained">Contained</Button>
                <Button color="secondary" variant="outlined">Outlined</Button>
                <Button color="secondary" disabled>Disabled</Button>
                <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}>
                    Icon left
                </Button>
                <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Icon right
                </Button>
                <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>

            <Typography variant="h4" gutterBottom>
                Success buttons
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                <Button variant="text" color="success">Text success</Button>
                <Button variant="contained" color="success">Contained success</Button>
                <Button variant="outlined" color="success">Outlined success</Button>
                <Button disabled color="success">Disabled</Button>
                <Button color="success" variant="outlined" startIcon={<DeleteIcon />}>
                    Icon left
                </Button>
                <Button color="success" variant="contained" endIcon={<SendIcon />}>
                    Icon right
                </Button>
                <IconButton color="success" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>

            <Typography variant="h4" gutterBottom>
                Error buttons
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                <Button variant="text" color="error">Text error</Button>
                <Button variant="contained" color="error">Contained error</Button>
                <Button variant="outlined" color="error">Outlined error</Button>
                <Button disabled color="error">Disabled</Button>
                <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
                    Icon left
                </Button>
                <Button color="error" variant="contained" endIcon={<SendIcon />}>
                    Icon right
                </Button>
                <IconButton color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </div>
    );
};

export default ButtonPage;
