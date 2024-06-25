import React from 'react';
import { Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const DrawerMenu = ({ open, onClose }) => {
    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <div
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
                style={{ width: 250 }}
            >
                <List>
                    <ListItemButton component={Link} to="/">
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton component={Link} to="/buttons">
                        <ListItemText primary="Buttons" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton component={Link} to="/table">
                        <ListItemText primary="Table" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/select">
                        <ListItemText primary="Select" />
                    </ListItemButton>
                </List>
            </div>
        </Drawer>
    );
};

export default DrawerMenu;
