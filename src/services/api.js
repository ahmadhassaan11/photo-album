import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getAlbums = async () => {
  const response = await axios.get(`${API_URL}/albums`);
  return response.data;
};

export const getAlbumPhotos = async (albumId) => {
  const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);
  return response.data;
};

export const getPhoto = async (photoId) => {
  const response = await axios.get(`${API_URL}/photos/${photoId}`);
  return response.data;
};

export const searchItems = async (query) => {
  const [albums, photos] = await Promise.all([
    axios.get(`${API_URL}/albums`, { params: { q: query } }),
    axios.get(`${API_URL}/photos`, { params: { q: query } }),
  ]);
  return { albums: albums.data, photos: photos.data };
};
