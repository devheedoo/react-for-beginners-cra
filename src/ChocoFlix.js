import { useEffect, useState } from 'react';

const MOVIE_SOURCE_URL =
  'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';

function ChocoFlix() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(MOVIE_SOURCE_URL)).json();
    return json.data.movies;
  };

  useEffect(async () => {
    const movies = await getMovies();
    setMovies(movies);
    setLoading(false);
  }, []);

  return (
    <div>
      <h1>CHOCOFLIX</h1>
      {isLoading ? (
        <strong>loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChocoFlix;
