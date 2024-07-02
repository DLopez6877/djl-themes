import React from 'react';
import { Container, Typography, Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

const SpeedDialPage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Speed Dial Examples
            </Typography>

            <Box mb={4}>
                <Typography variant="h6">Basic Speed Dial</Typography>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    direction='down'
                    sx={{ position: 'relative', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </Container>
    );
};

export default SpeedDialPage;
