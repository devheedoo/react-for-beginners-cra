import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const MOVIE_SOURCE_URL =
  'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(MOVIE_SOURCE_URL)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>CHOCOFLIX</h1>
      {isLoading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
