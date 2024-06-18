import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        <Card data-testid="galleryItem" sx={{ width: 200 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {item.title}
                </Typography>
                <Box onClick={toggleDescription} data-testid="toggle" sx={{ cursor: 'help', mb: 2 }}>
                    {showDescription ? (
                        <Typography variant="body1">{item.description}</Typography>
                    ) : (
                        <CardMedia
                            component="img"
                            height="160"
                            image={item.url}
                            alt={item.title}
                            sx={{ objectFit: 'cover' }}
                        />
                    )}
                </Box>
                <Button variant="outlined" color="error" startIcon={<FavoriteIcon />} onClick={addLike} data-testid="like">
                    Love
                </Button>
                <Typography variant="body2">
                    {item.likes} people love it!
                </Typography>
            </CardContent>
        </Card>
    );
}

export default GalleryItem;
