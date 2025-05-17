import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const mockEvents = [
  {
    id: 1,
    title: 'Planifikimi i Q4',
    date: '2025-06-15',
    time: '10:00 - 12:00',
    location: 'Salla e Konferencave A',
  },
  {
    id: 2,
    title: 'Lançimi i Produktit',
    date: '2025-06-20',
    time: '15:00 - 21:00',
    location: 'Salla e Madhe, Hilton Hotel',
  },
  {
    id: 3,
    title: 'Workshop Design Thinking',
    date: '2025-06-25',
    time: '09:00 - 17:00',
    location: 'Laboratori i Inovacionit',
  },
];

const Events = () => {
  const [events] = useState(mockEvents);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Eventet e Mia
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Krijo Event të Ri
        </Button>
      </Box>
      {events.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Avatar sx={{ bgcolor: 'primary.light', width: 80, height: 80, mx: 'auto', mb: 2 }}>
            <CalendarMonthIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Nuk keni evente të krijuara.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Filloni duke krijuar eventin tuaj të parë!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {events.map(event => (
            <Grid item xs={12} md={6} lg={4} key={event.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CalendarMonthIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">{event.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">{event.time}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">{event.location}</Typography>
                  </Box>
                  <Button variant="outlined" endIcon={<ChevronRightIcon />} fullWidth>
                    Detajet
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Events; 