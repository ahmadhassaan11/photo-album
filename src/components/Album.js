import React from 'react';

const Album = ({ album, onClick }) => {
  if (!album) {
    return null; 
  }

  return (
    <div onClick={() => onClick(album.id)}>
      <h2>{album.title}</h2>
      <p>User ID: {album.userId}</p>
      <p>Album ID: {album.id}</p>
    </div>
  );
};

export default Album;
