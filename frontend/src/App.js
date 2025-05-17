import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Attendees from './pages/Attendees';
import './App.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#13294B', 
      light: '#A0AEC1', 
      dark: '#0c1c34',
    },
    secondary: {
      main: '#B5BCC4', 
      light: '#D1C9B8',
      dark: '#9aa3ae',
    },
    background: {
      default: '#F2F2ED', 
      paper: '#F2F2ED',
    },
    text: {
      primary: '#13294B',
      secondary: '#5a6987',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '1px',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(19, 41, 75, 0.05)',
    '0px 4px 8px rgba(19, 41, 75, 0.08)',
    '0px 8px 16px rgba(19, 41, 75, 0.1)',
    '0px 12px 24px rgba(19, 41, 75, 0.12)',
    
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register", 
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/attendees",
    element: <Attendees />
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 