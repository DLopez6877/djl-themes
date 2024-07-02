import React, { useState } from 'react';
import { Drawer, List, ListItemText, Divider, Collapse, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const DrawerMenu = ({ open, onClose }) => {
    const [openComponents, setOpenComponents] = useState(false);
    const [openInputs, setOpenInputs] = useState(false);
    const [openDataDisplay, setOpenDataDisplay] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);
    const [openSurfaces, setOpenSurfaces] = useState(false);
    const [openNavigation, setOpenNavigation] = useState(false);

    const handleComponentsClick = () => {
        setOpenComponents(!openComponents);
    };

    const handleInputsClick = () => {
        setOpenInputs(!openInputs);
    };

    const handleDataDisplayClick = () => {
        setOpenDataDisplay(!openDataDisplay);
    };

    const handleFeedbackClick = () => {
        setOpenFeedback(!openFeedback);
    };

    const handleSurfacesClick = () => {
        setOpenSurfaces(!openSurfaces);
    };

    const handleNavigationClick = () => {
        setOpenNavigation(!openNavigation);
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <div
                role="presentation"
                onKeyDown={onClose}
                style={{ width: 250 }}
            >
                <List>
                    <ListItemButton component={Link} to="/" onClick={onClose}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <Divider />

                    <ListItemButton onClick={handleComponentsClick}>
                        <ListItemText primary="Components" />
                        {openComponents ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider />
                    <Collapse in={openComponents} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={handleInputsClick}>
                                <ListItemText primary="Inputs" />
                                {openInputs ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider />
                            <Collapse in={openInputs} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/autocomplete" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Autocomplete" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/button" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Button" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/buttongroup" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Button Group" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/checkbox" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Checkbox" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/floatingactionbar" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Floating Action Bar" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/radiogroup" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Radio Group" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/rating" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Rating" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/select" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Select" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/slider" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Slider" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/switch" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Switch" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/textfield" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Text Field" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/transferlist" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Transfer List" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/togglebutton" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Toggle Button" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>

                            <ListItemButton onClick={handleDataDisplayClick}>
                                <ListItemText primary="Data Display" />
                                {openDataDisplay ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider />
                            <Collapse in={openDataDisplay} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/avatar" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Avatar" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/badge" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Badge" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/chip" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Chip" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/divider" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Divider" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/icons" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Icons" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/materialicons" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Material Icons" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/list" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="List" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/table" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Table" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/tooltip" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Tooltip" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/typography" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Typography" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>

                            <ListItemButton onClick={handleFeedbackClick}>
                                <ListItemText primary="Feedback" />
                                {openFeedback ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider />
                            <Collapse in={openFeedback} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/alert" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Alert" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/backdrop" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Backdrop" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/dialog" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Dialog" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/progress" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Progress" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/skeleton" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Skeleton" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/snackbar" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Snackbar" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>

                            <ListItemButton onClick={handleSurfacesClick}>
                                <ListItemText primary="Surfaces" />
                                {openSurfaces ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider />
                            <Collapse in={openSurfaces} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/accordion" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Accordion" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/appbar" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="App Bar" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/card" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Card" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/paper" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Paper" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>

                            <ListItemButton onClick={handleNavigationClick}>
                                <ListItemText primary="Navigation" />
                                {openNavigation ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Divider />
                            <Collapse in={openNavigation} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/bottomnavigation" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Bottom Navigation" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/breadcrumbs" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Breadcrumbs" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/drawer" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Drawer" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/link" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Link" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/menu" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Menu" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/pagination" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Pagination" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/speeddial" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Speed Dial" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/stepper" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Stepper" />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton component={Link} to="/tabs" sx={{ pl: 4 }} onClick={onClose}>
                                        <ListItemText primary="Tabs" />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                </List>
            </div>
        </Drawer>
    );
};

export default DrawerMenu;
