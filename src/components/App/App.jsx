import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryList from './GalleryList';

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
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <GalleryList galleryItems={galleryItems} fetchGalleryItems={fetchGalleryItems} />
    </div>
  );
}

export default App;
