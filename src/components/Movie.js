import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <>
      <div>
        {movie.map((item) => (
          <div key={item.id}>
            <img src={item.medium_cover_image} alt={item.title} />
            <h2>
              <Link to={`/movie/${item.id}`}>{item.title}</Link>
            </h2>
            <p>{item.summary}</p>
            <ul>
              {item.genres.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
