import React, { useState } from 'react';
import { Container, Typography, Box, Drawer, List, ListItemText, ListItemIcon, ListItemButton, Divider, Grid, Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const DrawerPage = () => {
    const [drawerOpen, setDrawerOpen] = useState({ top: false, left: false, bottom: false, right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen({ ...drawerOpen, [anchor]: open });
    };

    const drawerList = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItemButton key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItemButton key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Drawer Examples
            </Typography>

            {/* Drawer with Multiple Anchors */}
            <Box mb={4}>
                <Typography variant="h6">Anchors</Typography>
                <Grid container spacing={2}>
                    {['left', 'right', 'top', 'bottom'].map((anchor) => (
                        <Grid item key={anchor}>
                            <Button variant="outlined" onClick={toggleDrawer(anchor, true)}>
                                {anchor} drawer
                            </Button>
                            <Drawer
                                anchor={anchor}
                                open={drawerOpen[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {drawerList(anchor)}
                            </Drawer>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default DrawerPage;
