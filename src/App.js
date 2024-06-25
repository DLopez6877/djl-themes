import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Typography, IconButton, AppBar, Toolbar, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import themes from './themes';
import ThemeSwitcher from './ThemeSwitcher';
import DrawerMenu from './DrawerMenu';
import ButtonsPage from './ButtonsPage';
import TablePage from './TablePage';
import SelectPage from './SelectPage';
import GettingStartedPage from './GettingStartedPage';

function App() {
  const [currentTheme, setCurrentTheme] = useState('sequoia');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:850px)');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            {isSmallScreen ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
                <img src='logo192.png' alt="DJL Designs Logo" style={{ width: 40, height: 40 }} />
                <ThemeSwitcher currentTheme={currentTheme} setTheme={setCurrentTheme} />
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  DJL Designs React Themes
                </Typography>
                <ThemeSwitcher currentTheme={currentTheme} setTheme={setCurrentTheme} sx={{ marginLeft: 'auto', maxWidth: 400 }} />
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </>
            )}

          </Toolbar>
        </AppBar>
        <Toolbar /> {/* This is a placeholder to push the content below the fixed AppBar */}
        <Container style={{ marginTop: '64px' }}>
          <Routes>
            <Route path="/" element={<GettingStartedPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/select" element={<SelectPage />} />
          </Routes>
          <DrawerMenu open={drawerOpen} onClose={toggleDrawer} />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
