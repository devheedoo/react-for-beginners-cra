import { useEffect } from 'react';
import { useParams } from 'react-router';

const MOVIE_DETAIL_URL = 'https://yts.mx/api/v2/movie_details.json?movie_id=';

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (await fetch(`${MOVIE_DETAIL_URL}${id}`)).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  });

  return <h1>Detail</h1>;
}

export default Detail;
