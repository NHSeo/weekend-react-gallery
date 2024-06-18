import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from './GalleryList';
import { Container, Typography } from '@mui/material';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = () => {
    axios.get('/api/gallery')
      .then(response => {
        console.log('Fetched items:', response.data);
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.error('Fetch Error', error);
      });
  };


  return (
    <Container data-testid="app">
      <header>
        <Typography variant="h3">
          React Gallery
        </Typography>
      </header>

      <GalleryList galleryItems={galleryItems} fetchGalleryItems={fetchGalleryItems} />
    </Container>
  );
}

export default App;
