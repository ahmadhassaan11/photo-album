import React from 'react';
import Photo from './Photo';
import { Grid, Container, Typography } from '@mui/material';

const RecentlyViewed = ({ photos }) => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Recently Viewed Photos
      </Typography>
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Photo photo={photo} onClick={() => {}} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecentlyViewed;
