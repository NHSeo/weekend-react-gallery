import React from 'react';
import GalleryItem from './GalleryItem';
import { Box } from '@mui/material';

function GalleryList(props) {
    const { galleryItems, fetchGalleryItems } = props;

    return (
        <Box data-testid="galleryList" display="flex" flexWrap="wrap" gap={2}>
            {galleryItems.map(item => (
                <GalleryItem key={item.id} item={item} fetchGalleryItems={fetchGalleryItems} />
            ))}
        </Box>
    );
}

export default GalleryList;