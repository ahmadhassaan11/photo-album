import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlbums } from '../services/api';
import Album from './Album';
import VirtualScroll from '../utils/VirtualScroll';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAlbums().then(setAlbums);
  }, []);

  const handleAlbumClick = (id) => {
    navigate(`/album/${id}`);
  };

  return (
    <div>
      <VirtualScroll
        items={albums}
        renderItem={(album) => album && <Album key={album.id} album={album} onClick={handleAlbumClick} />}
        itemHeight={100}
      />
    </div>
  );
};

export default Albums;
