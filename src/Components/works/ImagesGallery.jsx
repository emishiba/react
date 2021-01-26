import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImagesGallery = ({ slide }) => {
  const options = {
    showNav: false,
    showFullscreenButton: false,
    showPlayButton: false,
  };

  const images = [
    {
      original: slide[0],
      thumbnail: slide[0],
    },
    {
      original: slide[1],
      thumbnail: slide[1],
    },
    {
      original: slide[2],
      thumbnail: slide[2],
    },
    {
      original: slide[3],
      thumbnail: slide[3],
    },
  ];

  return (
    <>
      <ImageGallery
        key="index"
        items={images}
        showNav={options.showNav}
        showFullscreenButton={options.showFullscreenButton}
        showPlayButton={options.showPlayButton}
      />
    </>
  );
};

export default ImagesGallery;
