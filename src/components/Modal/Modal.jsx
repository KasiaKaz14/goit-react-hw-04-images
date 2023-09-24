import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  const handleImageClick = event => {
    if (event.code === event.arget) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.overlay} onClick={handleImageClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" width={1000} height={700} />
      </div>
    </div>
  );
};
