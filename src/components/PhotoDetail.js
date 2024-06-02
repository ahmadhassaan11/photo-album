import React, { useState, useEffect } from 'react';
import { getPhoto } from '../services/api';

const PhotoDetail = ({ photoId }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getPhoto(photoId).then(setPhoto);
  }, [photoId]);

  if (!photo) return null;

  return (
    <div>
      <img src={photo.url} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  );
};

export default PhotoDetail;
