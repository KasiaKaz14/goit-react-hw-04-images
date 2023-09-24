import { useEffect, useRef } from 'react';
import css from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  const handleImageClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleRef = useRef(null);
  useEffect(() => {
    const currentRef = handleRef.current;
    currentRef.addEventListener('click', handleImageClick);
    return () => {
      currentRef.removeEventListener('click', handleImageClick);
    };
  }, []);

  return (
    <div className={css.overlay} onClick={handleImageClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" width={1000} height={700} />
      </div>
    </div>
  );
};
