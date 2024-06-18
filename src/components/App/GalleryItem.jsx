import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {
    const { item, fetchGalleryItems } = props;
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
            <h2>{item.title}</h2>
            <div onClick={toggleDescription} data-testid="toggle">
                {showDescription ? (
                    <p>{item.description}</p>
                ) : (
                    <img src={item.url} alt={item.title} />
                )}
            </div>
            <button onClick={addLike} data-testid="like"> Like </button>
            <p>{item.likes} people likes it!</p>
        </div>
    );
}

export default GalleryItem;
