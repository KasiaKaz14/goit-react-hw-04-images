import React, { useState, useEffect, useCallback } from 'react';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './Images/Images';

export function App() {
  const [images, setImages] = useState([]);
  const [imageItem, setImageItem] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    getImages(imageItem, page);
  }, [imageItem, page]);

  const getImages = useCallback(
    async (image, page) => {
      setIsLoading(true);
      if (!image) {
        return;
      }
      try {
        const { hits, totalHits } = await fetchImages(image, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [imageItem, page]
  );

  const handleFormSubmit = imageItem => {
    setImageItem(imageItem);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 30,
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {loadMore && <Button onLoadMore={onLoadMore} page={page} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
}
