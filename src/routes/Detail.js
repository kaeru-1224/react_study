import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  function MovieDetail() {
    return (
      <>
        <div>
          <img src={movieDetail.medium_cover_image} />
        </div>
        <div>
          {movieDetail.title_long}-{movieDetail.rating}/10{" "}
        </div>
        <div>{movieDetail.description_full}</div>
      </>
    );
  }

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }, [id]);
  console.log(movieDetail);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      <div>
        {isLoading ? (
          <h1>Detail is Loaing...</h1>
        ) : (
          <>
            {" "}
            <h1 key={movieDetail.id}>{movieDetail.title}</h1>
            <MovieDetail />
          </>
        )}
      </div>
    </>
  );
}
export default Detail;
