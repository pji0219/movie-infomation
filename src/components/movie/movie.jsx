import React from 'react';
import styles from './movies.module.css';

function Movie({ year, genres, title, summary, poster }) {
  return (
    <div className={styles.movie}>
      <img src={poster} alt={title} title={title} />
      <div className={styles.movie__data}>
        <h3 className={styles.movie__title}>{title}</h3>
        <h5 className={styles.movie__year}>{year}</h5>
        <ul className={styles.movie__genres}>
          {genres.map((genre, index) => (
            <li key={index} className={styles.genres__genre}>
              {genre}
            </li>
          ))}
        </ul>
        <p className={styles.movie__summary}>{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

export default Movie;
