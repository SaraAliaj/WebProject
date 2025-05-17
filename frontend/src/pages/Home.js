import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container, Card, CardContent } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupsIcon from '@mui/icons-material/Groups';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Home.css';

const Home = () => {
  return (
    <Box className="home-page">
      {/* Hero Section */}
      <Box className="hero-section" sx={{ 
        background: 'linear-gradient(135deg, #13294B 0%, #1d3b66 100%)',
        color: 'white',
        py: 8,
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
            Eventify
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Platforma më e mirë për organizimin e eventeve tuaja
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2,
            flexWrap: 'wrap' 
          }}>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              sx={{
                bgcolor: '#A0AEC1',
                color: '#13294B',
                px: 4,
                py: 2,
                '&:hover': {
                  bgcolor: '#B5BCC4'
                }
              }}
            >
              Regjistrohu Tani
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              sx={{
                color: 'white',
                borderColor: 'white',
                px: 4,
                py: 2,
                '&:hover': {
                  borderColor: '#A0AEC1',
                  bgcolor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Kyçu
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#F2F2ED' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', color: '#13294B' }}>
            Shërbimet Tona
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: 'white', boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <CalendarTodayIcon sx={{ fontSize: 50, color: '#13294B', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#13294B' }}>
                    Planifikim i Eventeve
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Planifikoni eventet tuaja me lehtësi dhe efikasitet
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: 'white', boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <GroupsIcon sx={{ fontSize: 50, color: '#13294B', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#13294B' }}>
                    Menaxhim i Pjesëmarrësve
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Menaxhoni lehtësisht listën e të ftuarve dhe konfirmimet
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: 'white', boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <CelebrationIcon sx={{ fontSize: 50, color: '#13294B', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#13294B' }}>
                    Organizim i Plotë
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nga koncepti deri te realizimi, ne jemi këtu për ju
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', bgcolor: 'white', boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <EventIcon sx={{ fontSize: 50, color: '#13294B', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 2, color: '#13294B' }}>
                    Raportim në Kohë Reale
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ndiqni progresin e eventit tuaj në çdo moment
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', color: '#13294B' }}>
            Na Kontaktoni
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <LocationOnIcon sx={{ fontSize: 40, color: '#13294B', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: '#13294B' }}>
                  Adresa
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Rruga "Myslym Shyri"<br />
                  Tiranë, Shqipëri
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <PhoneIcon sx={{ fontSize: 40, color: '#13294B', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: '#13294B' }}>
                  Telefoni
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  +355 69 123 4567<br />
                  +355 42 345 678
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <EmailIcon sx={{ fontSize: 40, color: '#13294B', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: '#13294B' }}>
                  Email
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  info@eventify.al<br />
                  support@eventify.al
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#13294B', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                © 2024 Eventify. Të gjitha të drejtat e rezervuara.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
                <Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>
                  Kushtet e Përdorimit
                </Link>
                <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>
                  Privatësia
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 