import React, { useState } from 'react';
import { Container, Typography, Box, Stepper, Step, StepLabel, Button, StepContent } from '@mui/material';

const steps = [
    {
        label: 'Step 1',
        description: `This is the description for step 1. Here, you can put some content that explains what needs to be done in this step.`,
    },
    {
        label: 'Step 2',
        description: 'This is the description for step 2. Continue to the next step once you have completed the tasks for this step.',
    },
    {
        label: 'Step 3',
        description: `This is the description for step 3. Complete the tasks to finish the stepper process.`,
    },
];

const StepperPage = () => {
    const [horizontalActiveStep, setHorizontalActiveStep] = useState(0);
    const [verticalActiveStep, setVerticalActiveStep] = useState(0);

    const handleHorizontalNext = () => {
        setHorizontalActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleHorizontalBack = () => {
        setHorizontalActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleHorizontalReset = () => {
        setHorizontalActiveStep(0);
    };

    const handleVerticalNext = () => {
        setVerticalActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleVerticalBack = () => {
        setVerticalActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleVerticalReset = () => {
        setVerticalActiveStep(0);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Stepper Examples
            </Typography>

            {/* Horizontal Stepper */}
            <Box mb={4}>
                <Typography variant="h6">Horizontal Stepper</Typography>
                <Stepper activeStep={horizontalActiveStep}>
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box mt={2}>
                    {horizontalActiveStep === steps.length ? (
                        <Box>
                            <Typography variant="body1" gutterBottom>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleHorizontalReset}>Reset</Button>
                        </Box>
                    ) : (
                        <Box>
                            <Typography variant="body1" gutterBottom>{steps[horizontalActiveStep].description}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={horizontalActiveStep === 0}
                                    onClick={handleHorizontalBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Button onClick={handleHorizontalNext}>
                                    {horizontalActiveStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>

            {/* Vertical Stepper */}
            <Box mb={4}>
                <Typography variant="h6">Vertical Stepper</Typography>
                <Stepper activeStep={verticalActiveStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>{step.label}</StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="contained"
                                            onClick={handleVerticalNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleVerticalBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                <Box mt={2}>
                    {verticalActiveStep === steps.length ? (
                        <Box>
                            <Typography variant="body1" gutterBottom>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleVerticalReset}>Reset</Button>
                        </Box>
                    ) : (
                        <Box>
                            <Typography variant="body1" gutterBottom>{steps[verticalActiveStep].description}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={verticalActiveStep === 0}
                                    onClick={handleVerticalBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Button onClick={handleVerticalNext}>
                                    {verticalActiveStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default StepperPage;
