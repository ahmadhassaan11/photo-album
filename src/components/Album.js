import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const Album = ({ album, onClick }) => {
  if (!album) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea onClick={() => onClick(album.id)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {album.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created by User ID: {album.userId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Album ID: {album.id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Album;
