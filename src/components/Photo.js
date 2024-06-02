import React from 'react';

const Photo = ({ photo, onClick }) => {
  return (
    <div onClick={() => onClick(photo.id)}>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};

export default Photo;
