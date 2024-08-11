import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Box sx={{ backgroundColor: '#f0f0f0', padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto', mt: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs="
                alt="Welcome"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Welcome to Icanio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are glad to have you here. Explore our features and enjoy your stay!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/learn-more"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: 'auto', mt: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://t4.ftcdn.net/jpg/07/56/33/35/360_F_756333592_vTF7bg9FEZV22LjJkPAcPrluch8pvDb7.jpg"
                alt="Welcome"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Welcome to Icanio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are glad to have you here. Explore our features and enjoy your stay!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  component={Link}
                  to="/learn-more"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
