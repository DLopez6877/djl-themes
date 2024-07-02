import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Typography, Box } from '@mui/material';

const ButtonGroupExamples = ({ color }) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

    const handleMenuItemClick = (
        event,
        index
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
            <ButtonGroup color={color} variant="contained" aria-label="Basic button group">
                <Button>Contained</Button>
                <Button>Contained</Button>
                <Button>contained</Button>
            </ButtonGroup>
            <ButtonGroup color={color} variant="outlined" aria-label="Basic button group">
                <Button>Outlined</Button>
                <Button>Outlined</Button>
                <Button>Outlined</Button>
            </ButtonGroup>
            <ButtonGroup color={color} variant="text" aria-label="Basic button group">
                <Button>Text</Button>
                <Button>Text</Button>
                <Button>Text</Button>
            </ButtonGroup>
            <ButtonGroup
                color={color}
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Button color={color}>{options[selectedIndex]}</Button>
                <Button
                    size="small"
                    color={color}
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            disabled={index === 2}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </ Box>
    )
}

const ButtonGroupPage = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Primary buttons
            </Typography>
            <ButtonGroupExamples color="primary"></ButtonGroupExamples>

            <Typography variant="h4" gutterBottom>
                Secondary buttons
            </Typography>
            <ButtonGroupExamples color="secondary"></ButtonGroupExamples>

            <Typography variant="h4" gutterBottom>
                Success buttons
            </Typography>
            <ButtonGroupExamples color="success"></ButtonGroupExamples>

            <Typography variant="h4" gutterBottom>
                Warning buttons
            </Typography>
            <ButtonGroupExamples color="warning"></ButtonGroupExamples>

            <Typography variant="h4" gutterBottom>
                Info buttons
            </Typography>
            <ButtonGroupExamples color="info"></ButtonGroupExamples>

            <Typography variant="h4" gutterBottom>
                Error buttons
            </Typography>
            <ButtonGroupExamples color="error"></ButtonGroupExamples>

        </div>
    )
}

export default ButtonGroupPage