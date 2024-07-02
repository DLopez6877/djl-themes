import React from 'react';
import { Container, Typography, Box, Chip, Grid, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

const ChipPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Chip Examples
            </Typography>

            {/* Basic Chip */}
            <Box mb={4}>
                <Typography variant="h6">Basic Chip</Typography>
                <Chip label="Basic Chip" />
            </Box>

            {/* Chips with Icons */}
            <Box mb={4}>
                <Typography variant="h6">Chips with Icons</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Chip icon={<FaceIcon />} label="Icon Chip" />
                    </Grid>
                    <Grid item>
                        <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
                    </Grid>
                    <Grid item>
                        <Chip icon={<FaceIcon />} label="Deletable Icon Chip" onDelete={() => { }} />
                    </Grid>
                    <Grid item>
                        <Chip avatar={<Avatar>M</Avatar>} label="Deletable Avatar Chip" onDelete={() => { }} />
                    </Grid>
                </Grid>
            </Box>

            {/* Chips with Different Colors */}
            <Box mb={4}>
                <Typography variant="h6">Chips with Different Colors</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Chip label="Primary Chip" color="primary" />
                    </Grid>
                    <Grid item>
                        <Chip label="Secondary Chip" color="secondary" />
                    </Grid>
                    <Grid item>
                        <Chip label="Success Chip" color="success" />
                    </Grid>
                    <Grid item>
                        <Chip label="Error Chip" color="error" />
                    </Grid>
                </Grid>
            </Box>

            {/* Chips with Clickable Action */}
            <Box mb={4}>
                <Typography variant="h6">Chips with Clickable Action</Typography>
                <Chip label="Clickable Chip" onClick={() => alert('Chip clicked!')} />
            </Box>

            {/* Chips with Delete Action */}
            <Box mb={4}>
                <Typography variant="h6">Chips with Delete Action</Typography>
                <Chip
                    label="Deletable Chip"
                    onDelete={() => alert('Delete icon clicked!')}
                    deleteIcon={<DoneIcon />}
                />
            </Box>

            {/* Color Chips */}
            <Box mb={4}>
                <Typography variant="h6">Color Chips</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Chip label="Primary" color="primary" />
                    </Grid>
                    <Grid item>
                        <Chip label="Secondary" color="secondary" />
                    </Grid>
                    <Grid item>
                        <Chip label="Success" color="success" />
                    </Grid>
                    <Grid item>
                        <Chip label="Error" color="error" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ChipPage;
