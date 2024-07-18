import React, { useState } from 'react';
import './App.css';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const characters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function App() {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const generateColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * characters.length)];
    }
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', transition: 'background 0.5s' }}>
      <Container>
        {/* Hero Section */}
        <header style={{ padding: '50px 0', textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Welcome to My Fancy App
          </Typography>
          <Typography variant="h5" paragraph>
            Discover amazing features seamlessly.
          </Typography>
          <Button variant="contained" color="primary" onClick={generateColor}>
            Change Background Color
          </Button>
        </header>

        {/* Features Section */}
        <Grid container spacing={4} style={{ marginTop: '40px' }}>
          {['Feature One', 'Feature Two', 'Feature Three'].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{feature}</Typography>
                  <Typography>Explore the {feature.toLowerCase()} of our app.</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <footer style={{ padding: '20px 0', textAlign: 'center', marginTop: '40px' }}>
          <Typography variant="body2">© 2024 My Fancy App</Typography>
        </footer>
      </Container>
    </div>
  );
}

export default App;
