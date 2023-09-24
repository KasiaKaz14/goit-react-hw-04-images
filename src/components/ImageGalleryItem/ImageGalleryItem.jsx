import css from './ImageGalleryItem.module.css';

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
