import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
    openModal(largeImageURL);
  };

  return (
    <li className={css.galleryItem} onClick={handleClick}>
      <img src={src} alt={alt} className={css.image} />
    </li>
  );
};
