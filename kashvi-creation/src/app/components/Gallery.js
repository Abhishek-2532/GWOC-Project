import React from 'react';
import './Gallery.css'; // Make sure to create and style this CSS file

const images = [
    '24341-1_page-0001',
    '24341-1_page-0002',
    '24341-1_page-0003',
    // Add more image paths here
];

const Gallery = () => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Gallery;