import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid, Avatar, Chip } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const mockAttendees = [
  {
    id: 1,
    name: 'Arben Hoxha',
    email: 'arben.hoxha@email.com',
    status: 'Konfirmuar',
  },
  {
    id: 2,
    name: 'Elira Dervishi',
    email: 'elira.dervishi@email.com',
    status: 'Në pritje',
  },
  {
    id: 3,
    name: 'Blerim Krasniqi',
    email: 'blerim.krasniqi@email.com',
    status: 'Konfirmuar',
  },
];

const statusColor = {
  'Konfirmuar': 'success',
  'Në pritje': 'warning',
};

const statusIcon = {
  'Konfirmuar': <CheckCircleIcon fontSize="small" sx={{ mr: 0.5 }} />,
  'Në pritje': <HourglassEmptyIcon fontSize="small" sx={{ mr: 0.5 }} />,
};

const Attendees = () => {
  const [attendees] = useState(mockAttendees);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Pjesëmarrësit
        </Typography>
        <Button variant="contained" color="primary" startIcon={<GroupAddIcon />}>
          Fto Pjesëmarrës
        </Button>
      </Box>
      {attendees.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Avatar sx={{ bgcolor: 'primary.light', width: 80, height: 80, mx: 'auto', mb: 2 }}>
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Nuk ka pjesëmarrës të regjistruar.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ftoni pjesëmarrës për eventet tuaja!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {attendees.map(attendee => (
            <Grid item xs={12} md={6} lg={4} key={attendee.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {attendee.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {attendee.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                        <EmailIcon sx={{ fontSize: 18, mr: 0.5, color: 'primary.light' }} />
                        <Typography variant="body2" color="text.secondary">
                          {attendee.email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Chip
                    icon={statusIcon[attendee.status]}
                    label={attendee.status}
                    color={statusColor[attendee.status]}
                    variant="outlined"
                    size="small"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Attendees; 