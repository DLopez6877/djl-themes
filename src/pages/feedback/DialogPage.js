import React, { useState } from 'react';
import { Container, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const DialogPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dialog Examples
            </Typography>

            {/* Basic Dialog */}
            <Box mb={4}>
                <Typography variant="h6">Basic Dialog</Typography>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open Dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Basic Dialog</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This is a basic dialog example.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default DialogPage;
