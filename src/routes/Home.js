import { useState, useEffect } from "react";
import Movie from "../components/Movie";
function Home() {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(getMovies, []);

  return (
    <>
      <h1>Movie</h1>
      <h1>{isLoading ? "Loading..." : ""}</h1>
      <Movie movie={movie} />
    </>
  );
}
export default Home;
