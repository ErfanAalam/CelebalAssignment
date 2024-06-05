// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import getTheme from './theme';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Table from './pages/Table';
import Charts from './pages/Charts';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

const App = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <main style={{ marginLeft: 240, padding: 16 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Table />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
