import React from 'react';
import GalleryItem from './GalleryItem';

function GalleryList(props) {
    const { galleryItems, fetchGalleryItems } = props;

    return (
        <div data-testid="galleryList">
            {galleryItems.map(item => (
                <GalleryItem key={item.id} item={item} fetchGalleryItems={fetchGalleryItems} />
            ))}
        </div>
    );
}

export default GalleryList;