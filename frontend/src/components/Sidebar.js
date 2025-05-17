import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Divider, Badge, Avatar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StarIcon from '@mui/icons-material/Star';
import TimelineIcon from '@mui/icons-material/Timeline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import InsightsIcon from '@mui/icons-material/Insights';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import './Sidebar.css';

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTip, setCurrentTip] = useState(0);
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState('/dashboard');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);
  
  const tipsList = [
    { 
      icon: <TipsAndUpdatesIcon />, 
      title: "Këshillë", 
      text: "Përdorni kalendarin për planifikim më efektiv" 
    },
    { 
      icon: <StarIcon />, 
      title: "E re", 
      text: "Përdorni funksionalitetin e njoftimeve për organizim më të mirë" 
    },
    { 
      icon: <TimelineIcon />, 
      title: "Statistikë", 
      text: "70% e përdoruesve organizojnë evente më shpejt me Eventify" 
    }
  ];
  
  // Mock event stats data
  const eventStats = [
    { label: "Evente të ardhshme", value: 5, icon: <EventIcon />, color: "#A0AEC1" },
    { label: "Pjesëmarrje", value: 24, icon: <GroupsIcon />, color: "#D1C9B8" },
    { label: "Të konfirmuara", value: 18, icon: <CheckCircleOutlineIcon />, color: "#F2F2ED" }
  ];
  
  // Mock upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Mbledhje Ekipi",
      date: "24 Qer",
      time: "14:00 - 15:30",
      location: "Salla e Konferencave"
    },
    {
      id: 2,
      title: "Trajnimi Online",
      date: "26 Qer",
      time: "10:00 - 12:00",
      location: "Platforma Zoom"
    }
  ];
  
  const monthNames = [
    "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor",
    "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"
  ];

  const weekDays = ["D", "H", "M", "M", "E", "P", "S"];

  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setSelectedDate(newDate);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tipsList.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [tipsList.length]);
  
  // Generate calendar days for mini calendar
  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get current day
    const today = new Date();
    const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year;
    const currentDay = today.getDate();
    
    const days = [];
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    
    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday = isCurrentMonth && i === currentDay;
      const hasEvent = [5, 12, 18, 24, 26].includes(i); // Mock days with events
      
      days.push(
        <div 
          key={`day-${i}`} 
          className={`calendar-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}`}
          onClick={() => console.log(`Selected date: ${i}/${month + 1}/${year}`)}
        >
          {i}
        </div>
      );
    }
    
    // Add empty cells for remaining days to complete the grid
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={`empty-end-${i}`} className="calendar-day empty"></div>);
    }
    
    return days;
  };
  
  const menuItems = [
    { 
      text: 'Paneli', 
      icon: <DashboardIcon />, 
      path: '/dashboard',
      onClick: () => {
        navigate('/dashboard');
        if (isMobile && onClose) onClose();
      }
    },
    { 
      text: 'Eventet e Mia', 
      icon: <EventIcon />, 
      path: '/events',
      onClick: () => {
        navigate('/events');
        if (isMobile && onClose) onClose();
      }
    },
    { 
      text: 'Pjesëmarrësit', 
      icon: <PeopleIcon />, 
      path: '/attendees',
      onClick: () => {
        navigate('/attendees');
        if (isMobile && onClose) onClose();
      }
    },
    { 
      text: 'Njoftimet', 
      icon: <NotificationsActiveIcon />, 
      path: '/notifications',
      onClick: () => {
        navigate('/notifications');
        if (isMobile && onClose) onClose();
      },
      badge: 3
    },
    { 
      text: 'Cilësimet', 
      icon: <SettingsIcon />, 
      path: '/settings',
      onClick: () => {
        navigate('/settings');
        if (isMobile && onClose) onClose();
      }
    }
  ];

  return (
    <>
      {isMobile && <div className="sidebar-backdrop" onClick={onClose}></div>}
      <Box className="sidebar">
        <div className="sidebar-overlay"></div>
        <div className="sidebar-pattern"></div>
        
        <Box className="sidebar-header">
          <Typography variant="h5" className="app-title" onClick={() => navigate('/')}>
            Eventify
          </Typography>
          
          <Box className="user-profile">
            <Avatar className="user-avatar">G</Avatar>
            <Box className="user-info">
              <Typography variant="subtitle2" className="user-name">
                greta
              </Typography>
            </Box>
          </Box>
          
          {isMobile && (
            <button className="sidebar-close" onClick={onClose}>
              <CloseIcon />
            </button>
          )}
        </Box>
        
        <List component="nav" className="sidebar-nav">
          {menuItems.map((item) => (
            <Tooltip title={item.text} placement="right" arrow key={item.text}>
              <ListItem 
                button 
                onClick={item.onClick}
                className={activeMenu === item.path ? "sidebar-item-active" : "sidebar-item"}
              >
                <ListItemIcon className="sidebar-icon">
                  {item.badge ? (
                    <Badge badgeContent={item.badge} color="error">
                      {item.icon}
                    </Badge>
                  ) : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
        
        <Box className="mini-calendar-container">
          <Box className="mini-calendar-header">
            <Button
              className="calendar-nav-button"
              onClick={() => navigateMonth(-1)}
            >
              <ChevronLeftIcon />
            </Button>
            <Typography variant="subtitle1" className="mini-calendar-title">
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </Typography>
            <Button
              className="calendar-nav-button"
              onClick={() => navigateMonth(1)}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
          
          <Box className="calendar-weekdays">
            {weekDays.map((day, index) => (
              <div key={index} className="weekday">{day}</div>
            ))}
          </Box>
          
          <Box className="calendar-days">
            {generateCalendarDays()}
          </Box>
        </Box>
        
        <Box className="upcoming-events-container">
          <Box className="upcoming-events-header">
            <div className="upcoming-events-icon">
              <EventNoteIcon />
            </div>
            <Typography variant="subtitle1" className="upcoming-events-title">
              Eventet e Ardhshme
            </Typography>
          </Box>
          
          <Box className="upcoming-events-content">
            {upcomingEvents.map((event) => (
              <Box key={event.id} className="upcoming-event-item">
                <div className="event-date-badge">
                  <Typography variant="caption" className="event-date-text">
                    {event.date}
                  </Typography>
                </div>
                <Box className="event-details">
                  <Typography variant="subtitle2" className="event-title">
                    {event.title}
                  </Typography>
                  <Box className="event-detail-row">
                    <div className="event-detail-icon">
                      <AccessTimeIcon fontSize="small" />
                    </div>
                    <Typography variant="caption" className="event-detail-text">
                      {event.time}
                    </Typography>
                  </Box>
                  <Box className="event-detail-row">
                    <div className="event-detail-icon">
                      <LocationOnIcon fontSize="small" />
                    </div>
                    <Typography variant="caption" className="event-detail-text">
                      {event.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        
        <Box className="sidebar-footer">
          <Box className="tips-slider-container">
            <div className="tips-slider">
              {tipsList.map((tip, index) => (
                <div 
                  key={index} 
                  className={`tip-item ${index === currentTip ? 'active' : ''}`}
                >
                  <div className="tip-icon">
                    {tip.icon}
                  </div>
                  <div className="tip-content">
                    <Typography variant="subtitle2" className="tip-title">
                      {tip.title}
                    </Typography>
                    <Typography variant="caption" className="tip-text">
                      {tip.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="tip-indicators">
              {tipsList.map((_, index) => (
                <div 
                  key={index} 
                  className={`tip-indicator ${index === currentTip ? 'active' : ''}`}
                  onClick={() => setCurrentTip(index)}
                ></div>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar; 