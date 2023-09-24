import React, { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [imageItem, setImageItem] = useState('');

  const handleChange = event => {
    setImageItem(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imageItem.trim() === '') {
      return alert('Type a keyword for search');
    }

    onSubmit(imageItem);
    setImageItem('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          Search
        </button>

        <input
          className={css.input}
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="imageItem"
          value={imageItem}
        />
      </form>
    </header>
  );
};
