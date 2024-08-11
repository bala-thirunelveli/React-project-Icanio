import React from "react";
import { Container, Typography, Box, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          The address and numbers are on the website.
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Website" href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
              <LanguageIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
