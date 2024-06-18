import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
  const {item, fetchGalleryItems} = props;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const addLike = () => {
    axios.put(`/api/gallery/like/${item.id}`)
      .then(response => {
        fetchGalleryItems();
      })
      .catch(error => {
        console.error('Error counting', error);
      });
  };

  return (
    <div data-testid="galleryItem">
    </div>
  );
}

export default GalleryItem;
