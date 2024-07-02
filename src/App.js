import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container, Typography, IconButton, AppBar, Toolbar, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import themes from './themes';
import ThemeSwitcher from './ThemeSwitcher';
import DrawerMenu from './DrawerMenu';
import ButtonPage from './pages/inputs/ButtonPage';
import TablePage from './pages/data_display/TablePage';
import SelectPage from './pages/inputs/SelectPage';
import GettingStartedPage from './pages/GettingStartedPage';
import AutocompletePage from './pages/inputs/AutocompletePage';
import ButtonGroupPage from './pages/inputs/ButtonGroupPage';
import CheckBoxPage from './pages/inputs/CheckboxPage';
import RadioGroupPage from './pages/inputs/RadioGroupPage';
import TransferListPage from './pages/inputs/TransferListPage';
import TypographyPage from './pages/data_display/TypographyPage';
import AlertPage from './pages/feedback/AlertPage';
import BackdropPage from './pages/feedback/BackdropPage';
import ProgressPage from './pages/feedback/ProgressPage';
import CardPage from './pages/surfaces/CardPage';
import SpeedDialPage from './pages/navigation/SpeedDialPage';
import StepperPage from './pages/navigation/StepperPage';
import FloatingActionBarPage from './pages/inputs/FloatingActionBarPage';
import RatingPage from './pages/inputs/RatingPage';
import SliderPage from './pages/inputs/SliderPage';
import SwitchPage from './pages/inputs/SwitchPage';
import ToggleButtonPage from './pages/inputs/ToggleButtonPage';
import TextFieldPage from './pages/inputs/TextFieldPage';
import AvatarPage from './pages/data_display/AvatarPage';
import BadgePage from './pages/data_display/BadgePage';
import ChipPage from './pages/data_display/ChipPage';
import DividerPage from './pages/data_display/DividerPage';
import IconsPage from './pages/data_display/IconsPage';
import MaterialIconsPage from './pages/data_display/MaterialIconsPage';
import ListPage from './pages/data_display/ListPage';
import TooltipPage from './pages/data_display/TooltipPage';
import DialogPage from './pages/feedback/DialogPage';
import SkeletonPage from './pages/feedback/SkeletonPage';
import SnackbarPage from './pages/feedback/SnackbarPage';
import AccordionPage from './pages/surfaces/AccordionPage';
import AppBarPage from './pages/surfaces/AppBarPage';
import PaperPage from './pages/surfaces/PaperPage';
import BottomNavigationPage from './pages/navigation/BottomNavigationPage';
import BreadcrumbsPage from './pages/navigation/BreadcrumbsPage';
import DrawerPage from './pages/navigation/DrawerPage';
import LinkPage from './pages/navigation/LinkPage';
import MenuPage from './pages/navigation/MenuPage';
import PaginationPage from './pages/navigation/PaginationPage';
import TabsPage from './pages/navigation/TabsPage';

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
                <ThemeSwitcher currentTheme={currentTheme} setTheme={setCurrentTheme} sx={{ marginLeft: 'auto' }} />
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
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/buttongroup" element={<ButtonGroupPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/autocomplete" element={<AutocompletePage />} />
            <Route path="/checkbox" element={<CheckBoxPage />} />
            <Route path="/radiogroup" element={<RadioGroupPage />} />
            <Route path="/transferlist" element={<TransferListPage />} />
            <Route path="/alert" element={<AlertPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/backdrop" element={<BackdropPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/speeddial" element={<SpeedDialPage />} />
            <Route path="/stepper" element={<StepperPage />} />
            <Route path="/floatingactionbar" element={<FloatingActionBarPage />} />
            <Route path="/rating" element={<RatingPage />} />
            <Route path="/slider" element={<SliderPage />} />
            <Route path="/switch" element={<SwitchPage />} />
            <Route path="/togglebutton" element={<ToggleButtonPage />} />
            <Route path="/textfield" element={<TextFieldPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="/badge" element={<BadgePage />} />
            <Route path="/chip" element={<ChipPage />} />
            <Route path="/divider" element={<DividerPage />} />
            <Route path="/icons" element={<IconsPage />} />
            <Route path="/materialicons" element={<MaterialIconsPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/tooltip" element={<TooltipPage />} />
            <Route path="/dialog" element={<DialogPage />} />
            <Route path="/skeleton" element={<SkeletonPage />} />
            <Route path="/snackbar" element={<SnackbarPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/appbar" element={<AppBarPage />} />
            <Route path="/paper" element={<PaperPage />} />
            <Route path="/bottomnavigation" element={<BottomNavigationPage />} />
            <Route path="/breadcrumbs" element={<BreadcrumbsPage />} />
            <Route path="/drawer" element={<DrawerPage />} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/pagination" element={<PaginationPage />} />
            <Route path="/tabs" element={<TabsPage />} />
          </Routes>
          <DrawerMenu open={drawerOpen} onClose={toggleDrawer} />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
