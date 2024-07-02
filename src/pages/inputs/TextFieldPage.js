import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Grid } from '@mui/material';

const TextFieldPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [multiline, setMultiline] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMultilineChange = (event) => {
        setMultiline(event.target.value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                TextField Examples
            </Typography>

            {/* Basic TextField */}
            <Box mb={4}>
                <Typography variant="h6">Basic TextField</Typography>
                <TextField
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    variant="outlined"
                    fullWidth
                />
            </Box>

            {/* TextField with Email Validation */}
            <Box mb={4}>
                <Typography variant="h6">TextField with Email Validation</Typography>
                <TextField
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    variant="outlined"
                    fullWidth
                    type="email"
                />
            </Box>

            {/* Multiline TextField */}
            <Box mb={4}>
                <Typography variant="h6">Multiline TextField</Typography>
                <TextField
                    label="Multiline"
                    value={multiline}
                    onChange={handleMultilineChange}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                />
            </Box>

            {/* Color TextFields */}
            <Box mb={4}>
                <Typography variant="h6">Color TextFields</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Primary"
                            variant="outlined"
                            fullWidth
                            color="primary"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Secondary"
                            variant="outlined"
                            fullWidth
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Success"
                            variant="outlined"
                            fullWidth
                            color="success"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Error"
                            variant="outlined"
                            fullWidth
                            color="error"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TextFieldPage;
