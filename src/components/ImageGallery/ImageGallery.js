import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ images, addToggleModal, addUrlBigImg }) {
  return (
    <ul key={nanoid()} className={styles.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallImg={image.webformatURL}
          bigImg={image.largeImageURL}
          tags={image.tags}
          addToggleModal={addToggleModal}
          addUrlBigImg={addUrlBigImg}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
