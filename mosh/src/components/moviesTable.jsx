import React from "react";
import Like from "./common/like";

export const MoviesTable = ({
  movies: moviesPerPage,
  onLike,
  onDelete,
  onSort,
}) => {
  return (
    <table className="table table-dark table-hover table-striped">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("rating")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {moviesPerPage.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
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
