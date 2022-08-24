import React, { useContext } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";
import LikeAllContext from "./likeAllContext.js";

export const MoviesTable = ({
  movies: moviesPerPage,
  onLike,
  onDelete,
  onSort,
}) => {
  const likeAllContext = useContext(LikeAllContext);

  return (
    <table className="table table-dark table-hover table-striped">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("rating")}>Rate</th>
          <th
            onClick={() => likeAllContext.onLikeAllClick()}
            style={{ cursor: "pointer" }}
          >
            {likeAllContext.likeAllState ? "Unlike all" : "Like all"}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {moviesPerPage.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/movies/${movie._id}`} className="text-info">
                {movie.title}
              </Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like toggleLikedIcon={() => onLike(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie._id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
