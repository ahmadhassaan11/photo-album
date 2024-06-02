import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumPhotos } from '../services/api';
import Photo from './Photo';

const AlbumDetail = () => {
  const { id: albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAlbumPhotos(albumId).then(setPhotos);
  }, [albumId]);

  return (
    <div>
      {photos.map(photo => (
        <Photo key={photo.id} photo={photo} onClick={() => {}} />
      ))}
    </div>
  );
};

export default AlbumDetail;
