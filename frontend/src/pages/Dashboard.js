import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Card, 
  CardContent,
  Avatar,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  InputAdornment,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const eventCategories = [
  'Mbledhje', 
  'Konferencë', 
  'Workshop', 
  'Sociale', 
  'Team Building'
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    category: '',
    attendees: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
  
  useEffect(() => {
    setShowSidebar(!isMobile);
  }, [isMobile]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleCreateEventOpen = () => {
    setOpenCreateEvent(true);
  };

  const handleCreateEventClose = () => {
    setOpenCreateEvent(false);
  };

  const handleCreateEvent = () => {
    // TODO: Call API to create event
    console.log('Creating event:', newEvent);
    handleCreateEventClose();
  };

  const handleEventChange = (field, value) => {
    setNewEvent({
      ...newEvent,
      [field]: value
    });
  };
  
  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>Duke u ngarkuar...</Box>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const upcomingEvents = [
    {
      id: 1,
      title: 'Planifikimi i Q4',
      date: 'Sht, Qer 15',
      time: '10:00 - 12:00',
      location: 'Salla e Konferencave A',
      attendees: 12,
      category: 'Mbledhje'
    },
    {
      id: 2,
      title: 'Lançimi i Produktit',
      date: 'Enj, Qer 20',
      time: '15:00 - 21:00',
      location: 'Salla e Madhe, Hilton Hotel',
      attendees: 130,
      category: 'Konferencë'
    },
    {
      id: 3,
      title: 'Workshop Design Thinking',
      date: 'Mar, Qer 25',
      time: '09:00 - 17:00',
      location: 'Laboratori i Inovacionit',
      attendees: 25,
      category: 'Workshop'
    }
  ];

  const stats = [
    {
      icon: <EventAvailableIcon sx={{ color: '#13294B', fontSize: 28 }} />,
      value: '24',
      label: 'Evente Aktive',
      trend: '+12% nga muaji i kaluar'
    },
    {
      icon: <GroupAddIcon sx={{ color: '#13294B', fontSize: 28 }} />,
      value: '156',
      label: 'Pjesëmarrës Total',
      trend: '+8% nga muaji i kaluar'
    },
    {
      icon: <CheckCircleIcon sx={{ color: '#13294B', fontSize: 28 }} />,
      value: '92%',
      label: 'Shkalla e Pjesëmarrjes',
      trend: '+5% nga muaji i kaluar'
    },
    {
      icon: <TrendingUpIcon sx={{ color: '#13294B', fontSize: 28 }} />,
      value: '18',
      label: 'Evente të Planifikuara',
      trend: '+15% nga muaji i kaluar'
    }
  ];

  return (
    <Box className="dashboard-container">
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
      <Box className="main-content" sx={{ marginLeft: { xs: 0, md: showSidebar ? '300px' : 0 }, transition: 'margin-left 0.3s ease' }}>
        <AppBar position="static" color="default" elevation={0} className="app-header">
          <Toolbar>
            {isMobile && (
              <IconButton 
                edge="start" 
                sx={{ mr: 2 }} 
                onClick={toggleSidebar}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box className="search-container">
              <TextField
                placeholder="Kërko evente sipas titullit, përshkrimit, ose vendndodhjes"
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit" className="header-icon">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#3f51b5' }}>
                  {user.firstName ? user.firstName.charAt(0) : user.email.charAt(0).toUpperCase()}
                </Avatar>
                <Box sx={{ ml: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {user.firstName || user.email.split('@')[0]}
                  </Typography>
                </Box>
              </Box>
              <IconButton color="inherit" onClick={handleLogout} sx={{ ml: 2 }}>
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box className="content-wrapper">
          <Box className="dashboard-header">
            <Box>
              <Typography variant="h4" className="welcome-text">
                Mirë se erdhe, {user.firstName || user.email.split('@')[0]}!
              </Typography>
              <Typography variant="body1" sx={{ color: '#5a6987', mt: 1 }}>
                Këtu është një përmbledhje e eventeve dhe aktiviteteve tuaja
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />}
              onClick={handleCreateEventOpen}
              className="create-button"
            >
              Krijo Event të Ri
            </Button>
          </Box>

          <Box className="stats-container">
            {stats.map((stat, index) => (
              <Box key={index} className="stat-card">
                <Box className="stat-icon">
                  {stat.icon}
                </Box>
                <Typography className="stat-value">
                  {stat.value}
                </Typography>
                <Typography className="stat-label">
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#5a6987', 
                  display: 'block',
                  mt: 1,
                  fontSize: '0.75rem'
                }}>
                  {stat.trend}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box className="section-header">
            <Typography variant="h5">Eventet e Ardhshme</Typography>
            <Button 
              variant="text" 
              endIcon={<ChevronRightIcon />}
              onClick={() => navigate('/events')}
              sx={{ 
                color: '#13294B',
                textTransform: 'none',
                fontWeight: 500
              }}
            >
              Shiko të gjitha
            </Button>
          </Box>

          <Box className="events-grid">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="event-card">
                <CardContent className="event-card-content">
                  <Typography className="event-category">
                    {event.category}
                  </Typography>
                  <Typography variant="h6" className="event-title">
                    {event.title}
                  </Typography>
                  <Box className="event-details">
                    <Box className="event-detail-item">
                      <CalendarMonthIcon fontSize="small" />
                      <Typography variant="body2">{event.date}</Typography>
                    </Box>
                    <Box className="event-detail-item">
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="body2">{event.time}</Typography>
                    </Box>
                    <Box className="event-detail-item">
                      <LocationOnIcon fontSize="small" />
                      <Typography variant="body2">{event.location}</Typography>
                    </Box>
                  </Box>
                </CardContent>
                <Box className="event-actions">
                  <Box className="event-attendees">
                    <Avatar className="attendees-avatar">
                      {event.attendees}
                    </Avatar>
                    <Typography className="attendees-count">
                      {event.attendees} Pjesëmarrës
                    </Typography>
                  </Box>
                  <Button 
                    className="view-details-button" 
                    size="small" 
                    variant="text"
                    endIcon={<ChevronRightIcon />}
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    Detajet
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Create Event Dialog */}
      <Dialog 
        open={openCreateEvent} 
        onClose={handleCreateEventClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="dialog-title">
          Krijo Event të Ri
        </DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            label="Titulli i Eventit"
            variant="outlined"
            fullWidth
            className="form-field"
            value={newEvent.title}
            onChange={(e) => handleEventChange('title', e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Data"
                type="date"
                variant="outlined"
                fullWidth
                className="form-field"
                InputLabelProps={{ shrink: true }}
                value={newEvent.date}
                onChange={(e) => handleEventChange('date', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Ora"
                type="time"
                variant="outlined"
                fullWidth
                className="form-field"
                InputLabelProps={{ shrink: true }}
                value={newEvent.time}
                onChange={(e) => handleEventChange('time', e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            label="Vendndodhja"
            variant="outlined"
            fullWidth
            className="form-field"
            value={newEvent.location}
            onChange={(e) => handleEventChange('location', e.target.value)}
          />
          <TextField
            label="Përshkrimi"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            className="form-field"
            value={newEvent.description}
            onChange={(e) => handleEventChange('description', e.target.value)}
          />
          <TextField
            select
            label="Kategoria"
            variant="outlined"
            fullWidth
            className="form-field"
            value={newEvent.category}
            onChange={(e) => handleEventChange('category', e.target.value)}
          >
            {eventCategories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Pjesëmarrës (email-e të ndara me presje)"
            variant="outlined"
            fullWidth
            className="form-field"
            value={newEvent.attendees}
            onChange={(e) => handleEventChange('attendees', e.target.value)}
          />
        </DialogContent>
        <DialogActions className="dialog-actions">
          <Button 
            onClick={handleCreateEventClose} 
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            Anulo
          </Button>
          <Button 
            onClick={handleCreateEvent} 
            variant="contained" 
            color="primary"
            sx={{ borderRadius: 2 }}
          >
            Krijo Event
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard; 