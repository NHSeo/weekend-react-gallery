import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
        <img src="images/cat_small.jpg"/>
        <img src="images/dog_large.jpg"/>
        <img src="images/fox_twin.jpg"/>
        <img src="images/koala_large.jpg"/>
      </div>
    );
}

export default App;
