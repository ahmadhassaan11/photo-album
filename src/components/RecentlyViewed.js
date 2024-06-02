import React from 'react';
import Photo from './Photo';

const RecentlyViewed = ({ photos }) => {
  return (
    <div>
      {photos.map(photo => (
        <Photo key={photo.id} photo={photo} onClick={() => {}} />
      ))}
    </div>
  );
};

export default RecentlyViewed;
