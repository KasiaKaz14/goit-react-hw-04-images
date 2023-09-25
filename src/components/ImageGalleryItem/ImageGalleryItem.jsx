import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  const handleClick = () => {
    openModal(largeImageURL);
  };

  return (
    <li className={css.galleryItem} onClick={handleClick}>
      <img src={src} alt={alt} className={css.image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
