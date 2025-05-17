import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Grid, Container, Alert } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const { register, error: authError } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Emri i përdoruesit është i detyrueshëm';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Emri i përdoruesit duhet të jetë të paktën 3 karaktere';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Emri i përdoruesit mund të përmbajë vetëm shkronja, numra dhe underscore';
    }
    
    // First Name validation
    if (!formData.firstName) {
      newErrors.firstName = 'Emri është i detyrueshëm';
    }
    
    // Last Name validation
    if (!formData.lastName) {
      newErrors.lastName = 'Mbiemri është i detyrueshëm';
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email-i është i detyrueshëm';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-i nuk është valid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Fjalëkalimi është i detyrueshëm';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Fjalëkalimi duhet të jetë të paktën 6 karaktere';
    }
    
    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmimi i fjalëkalimit është i detyrueshëm';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Fjalëkalimet nuk përputhen';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Remove confirmPassword before sending to API
    const { confirmPassword, ...registerData } = formData;
    
    setLoading(true);
    try {
      await register(registerData);
      navigate('/dashboard');
    } catch (err) {
      // Error is handled by AuthContext
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container className="register-container">
      <Grid item xs={12} md={5} lg={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Box className="content-container">
          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#3f51b5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Eventify
              </Typography>
            </Box>
            
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              Krijo Llogari
            </Typography>
            
            {(authError || Object.keys(errors).length > 0) && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {authError || Object.values(errors).find(error => error)}
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Emri i përdoruesit"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Emri"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Mbiemri"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Fjalëkalimi"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Konfirmo Fjalëkalimin"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                margin="normal"
                required
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? 'Duke u regjistruar...' : 'Regjistrohu'}
              </Button>
            </form>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Keni tashmë një llogari?{' '}
                <Link to="/login" style={{ color: '#3f51b5' }}>
                  Kyçu
                </Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register; 