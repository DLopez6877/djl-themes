import React, { useState } from 'react';
import { Container, Typography, Box, FormControlLabel, Switch, Grid } from '@mui/material';

const SwitchPage = () => {
    const [basicSwitch, setBasicSwitch] = useState(false);
    const [topSwitch, setTopSwitch] = useState(false);
    const [startSwitch, setStartSwitch] = useState(false);
    const [bottomSwitch, setBottomSwitch] = useState(false);
    const [endSwitch, setEndSwitch] = useState(false);
    const [disabledSwitch, setDisabledSwitch] = useState(true);
    const [primarySwitch, setPrimarySwitch] = useState(false);
    const [secondarySwitch, setSecondarySwitch] = useState(false);
    const [successSwitch, setSuccessSwitch] = useState(false);
    const [errorSwitch, setErrorSwitch] = useState(false);

    const handleBasicSwitchChange = (event) => {
        setBasicSwitch(event.target.checked);
    };

    const handleTopSwitchChange = (event) => {
        setTopSwitch(event.target.checked);
    };

    const handleStartSwitchChange = (event) => {
        setStartSwitch(event.target.checked);
    };

    const handleBottomSwitchChange = (event) => {
        setBottomSwitch(event.target.checked);
    };

    const handleEndSwitchChange = (event) => {
        setEndSwitch(event.target.checked);
    };

    const handleDisabledSwitchChange = (event) => {
        setDisabledSwitch(event.target.checked);
    };

    const handlePrimarySwitchChange = (event) => {
        setPrimarySwitch(event.target.checked);
    };

    const handleSecondarySwitchChange = (event) => {
        setSecondarySwitch(event.target.checked);
    };

    const handleSuccessSwitchChange = (event) => {
        setSuccessSwitch(event.target.checked);
    };

    const handleErrorSwitchChange = (event) => {
        setErrorSwitch(event.target.checked);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Switch Examples
            </Typography>

            {/* Basic Switch */}
            <Box mb={4}>
                <Typography variant="h6">Basic Switch</Typography>
                <FormControlLabel
                    control={<Switch checked={basicSwitch} onChange={handleBasicSwitchChange} />}
                    label="Toggle Switch"
                />
            </Box>

            {/* Switch with Label Placement */}
            <Box mb={4}>
                <Typography variant="h6">Switch with Label Placement</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={topSwitch} onChange={handleTopSwitchChange} />}
                            label="Top"
                            labelPlacement="top"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={startSwitch} onChange={handleStartSwitchChange} />}
                            label="Start"
                            labelPlacement="start"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={bottomSwitch} onChange={handleBottomSwitchChange} />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={endSwitch} onChange={handleEndSwitchChange} />}
                            label="End"
                            labelPlacement="end"
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Disabled Switch */}
            <Box mb={4}>
                <Typography variant="h6">Disabled Switch</Typography>
                <FormControlLabel
                    control={<Switch checked={disabledSwitch} onChange={handleDisabledSwitchChange} disabled />}
                    label="Disabled Switch"
                />
            </Box>

            {/* Color Switches */}
            <Box mb={4}>
                <Typography variant="h6">Color Switches</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={primarySwitch} onChange={handlePrimarySwitchChange} color="primary" />}
                            label="Primary"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={secondarySwitch} onChange={handleSecondarySwitchChange} color="secondary" />}
                            label="Secondary"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={successSwitch} onChange={handleSuccessSwitchChange} color="success" />}
                            label="Success"
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={errorSwitch} onChange={handleErrorSwitchChange} color="error" />}
                            label="Error"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default SwitchPage;
