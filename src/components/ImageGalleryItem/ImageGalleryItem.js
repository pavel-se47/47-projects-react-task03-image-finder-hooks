import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  smallImg,
  bigImg,
  tags,
  addToggleModal,
  addUrlBigImg,
}) {
  return (
    <li className={styles.item} onClick={addToggleModal}>
      <img
        className={styles.image}
        src={smallImg}
        data-sourse={bigImg}
        alt={tags}
        onClick={addUrlBigImg}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
