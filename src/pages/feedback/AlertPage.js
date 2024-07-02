import React from 'react';
import { Button, Container, Typography, Box, Alert, AlertTitle } from '@mui/material';

const AlertPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Alert Examples
            </Typography>

            <Box mb={4}>
                <Typography variant="h6">Basic Alerts</Typography>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Filled Alerts</Typography>
                <Alert variant="filled" severity="error">
                    This is a filled error alert — check it out!
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning alert — check it out!
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info alert — check it out!
                </Alert>
                <Alert variant="filled" severity="success">
                    This is a filled success alert — check it out!
                </Alert>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Outlined Alerts</Typography>
                <Alert variant="outlined" severity="error">
                    This is a filled error alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="warning">
                    This is a filled warning alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="info">
                    This is a filled info alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="success">
                    This is a filled success alert — check it out!
                </Alert>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Alerts with Titles</Typography>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Alerts with Actions</Typography>
                <Alert
                    severity="error"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is an error alert — check it out!
                </Alert>
                <Alert
                    severity="warning"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a warning alert — check it out!
                </Alert>
                <Alert
                    severity="info"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is an info alert — check it out!
                </Alert>
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Box>

            <Box mb={4}>
                <Typography variant="h6">Alerts with Actions</Typography>
                <Alert
                    severity="error"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is an error alert — check it out!
                </Alert>
                <Alert
                    severity="warning"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a warning alert — check it out!
                </Alert>
                <Alert
                    severity="info"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is an info alert — check it out!
                </Alert>
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Box>
        </Container>
    );
};

export default AlertPage;
