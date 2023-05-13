import React, { useState } from 'react';
import styles from './Searchbar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const inputChange = e => {
    setQuery(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={formSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.label}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
        />
      </form>
    </header>
  );
}
