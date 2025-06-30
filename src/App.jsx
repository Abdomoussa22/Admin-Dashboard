import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import ContactUs from './Pages/Contact/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import { getDesignTokens } from './Theme';
import Team from './Pages/team/Team';
import Invoices from './Pages/invoices/Invoices';
import Form from './Pages/form/Form';
import Calendar from './Pages/calendar/Calendar';
import Faq from './Pages/faq/Faq';
import BarChart from './Pages/barChart/BarChart';
import PieChart from './Pages/pieChart/PieChart';
import LineChart from './Pages/lineChart/LineChart';
import Geography from './Pages/geography/Geography';
import NotFound from './Pages/notFound/NotFound';


const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") ? 
  localStorage.getItem("currentMode") : "light");

  // @ts-ignore
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)));


  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
=======
    <ThemeProvider  theme={theme}>
>>>>>>> 049d23a (second device)
      <CssBaseline>
        <Router>
          <Navbar handleDrawerOpen={handleDrawerOpen} open={open} mode={setMode} />
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route index element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<ContactUs />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/bar" element={<BarChart/>} />
            <Route path="/pie" element={<PieChart/>} />
            <Route path="/line" element={<LineChart/>} />
            <Route path="/geography" element={<Geography/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App