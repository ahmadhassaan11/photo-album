import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Dialog, DialogContent } from '@mui/material';

const Photo = ({ photo, onClick }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia component="img" height="140" image={photo.thumbnailUrl} alt={photo.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {photo.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img src={photo.url} alt={photo.title} style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default Photo;
