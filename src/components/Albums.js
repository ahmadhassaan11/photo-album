import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlbums, searchItems } from '../services/api';
import Album from './Album';
import VirtualScroll from '../utils/VirtualScroll';
import Search from './Search';
import { Container, Typography, Grid, Pagination } from '@mui/material';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbums().then(data => {
      setAlbums(data);
      setFilteredAlbums(data);
    });
  }, []);

  const handleAlbumClick = (id) => {
    navigate(`/album/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    if (query) {
      searchItems(query).then(result => {
        setFilteredAlbums(result.albums);
      });
    } else {
      setFilteredAlbums(albums);
    }
  };

  const paginatedAlbums = filteredAlbums.slice((page - 1) * 20, page * 20);

  return (
    <Container>
      <Search onSearch={handleSearch} />
      <Typography variant="h4" gutterBottom>
        Albums
      </Typography>
      <Grid container spacing={2}>
        {paginatedAlbums.map((album) => (
          <Grid item key={album.id} xs={12} sm={6} md={4}>
            <Album album={album} onClick={handleAlbumClick} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={Math.ceil(filteredAlbums.length / 20)} page={page} onChange={handlePageChange} />
    </Container>
  );
};

export default Albums;
