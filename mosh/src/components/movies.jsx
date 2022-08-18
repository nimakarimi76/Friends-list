import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovie = (id) => {
    this.setState(deleteMovie(id));
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked; //* if it's true it becomes false, otherwise it becomes true
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return <h3 className="p-3">There is no movie available"</h3>;
    return (
      <div className="container">
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <i className="fa fa-heart" aria-hidden="true"></i>

        <h1>Movies</h1>
        {this.tableOfMovies()}
      </div>
    );
  }

  tableOfMovies = () => {
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table table-dark table-hover table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    toggleLikedIcon={() => this.handleLike(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDeleteMovie(movie._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  };
}

export default Movies;
