import React from 'react';
import styles from './movies.module.css';

function Movies({ id, year, title, summary, poster }) {
  return ( 
    <div className={styles.movie}>
      <img src={poster} alt={title} title={title}/>
      <div className={styles.movie__data}>
        <h3 className={styles.movie__title}>{title}</h3>
        <h5 className={styles.movie__year}>{year}</h5>
        <p className={styles.movie__summary}>{summary}</p>
      </div>
    </div>
  );
}

export default Movies;
