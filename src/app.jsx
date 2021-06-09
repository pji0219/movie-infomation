import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './components/movies';
import styles from './app.module.css';

function App() {
  const [isLoding, setIsLoding] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios
      .get(
        'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'
      )
      .then((res) => {
        setMovies(res.data.data.movies);
        setIsLoding(false);
      })
      .catch((err) => console.log('에러 발생 (o_0;)', err));
  }, []);

  return (
    <section className={styles.container}>
      {isLoding ? (
        <div className={styles.loader}>
          <span className={styles.loader__text}>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movies
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_civer_image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
