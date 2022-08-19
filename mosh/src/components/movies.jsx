import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "./common/paginate.js";

class Movies extends Component {
  state = {
    movies: getMovies(),
    showInPage: 4,
    currentPage: 1,
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

  handlePage = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    // if there is no movies don't show the table
    const { length: count } = this.state.movies;
    if (count === 0)
      return <h3 className="p-3">There is no movie available"</h3>;

    const { currentPage, showInPage } = this.state;
    return (
      <div className="container">
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <i className="fa fa-heart" aria-hidden="true"></i>

        <h1>Movies</h1>
        {this.tableOfMovies()}

        <Pagination
          pageNumbers={Math.ceil(
            this.state.movies.length / this.state.showInPage
          )}
          currentPage={currentPage}
          showInPage={showInPage}
          onChangePage={this.handlePage}
        />
      </div>
    );
  }

  tableOfMovies = () => {
    const { movies: allMovies, showInPage, currentPage } = this.state;

    const moviesPerPage = paginate(allMovies, currentPage, showInPage);

    return (
      <React.Fragment>
        <p>Showing {allMovies.length} movies in the database</p>
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
            {moviesPerPage.map((movie) => (
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
