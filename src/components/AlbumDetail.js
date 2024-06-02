import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumPhotos } from '../services/api';
import Photo from './Photo';
import { Grid, Container, Pagination, Typography } from '@mui/material';

const AlbumDetail = () => {
  const { id: albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAlbumPhotos(albumId).then(setPhotos);
  }, [albumId]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedPhotos = photos.slice((page - 1) * 20, page * 20);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Photos
      </Typography>
      <Grid container spacing={2}>
        {paginatedPhotos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            <Photo photo={photo} onClick={() => {}} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(photos.length / 20)} page={page} onChange={handlePageChange} />
    </Container>
  );
};

export default AlbumDetail;
