import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

const ListPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                List Examples
            </Typography>

            {/* Basic List */}
            <Box mb={4}>
                <Typography variant="h6">Basic List</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Item 1" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Item 2" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Item 3" />
                    </ListItem>
                </List>
            </Box>

            {/* List with Icons */}
            <Box mb={4}>
                <Typography variant="h6">List with Icons</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent Mail" />
                    </ListItem>
                </List>
            </Box>

            {/* Nested List */}
            <Box mb={4}>
                <Typography variant="h6">Nested List</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Primary" />
                    </ListItem>
                    <List component="div" disablePadding>
                        <ListItem sx={{ pl: 4 }}>
                            <ListItemText primary="Nested Item 1" />
                        </ListItem>
                        <ListItem sx={{ pl: 4 }}>
                            <ListItemText primary="Nested Item 2" />
                        </ListItem>
                    </List>
                </List>
            </Box>

            {/* List with Divider */}
            <Box mb={4}>
                <Typography variant="h6">List with Divider</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Item 1" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Item 2" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="Item 3" />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default ListPage;
