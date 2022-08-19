import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    showInPage: 4,
    selectedPage: 1,
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

  handlePagination = () => {
    const pageNumbers = Math.ceil(
      this.state.movies.length / this.state.showInPage
    );
    if (pageNumbers == 1)
      return; // just one page so don't show the pagination at all
    else return this.showPagination(pageNumbers);
  };

  showPagination = (pageNumbers) => {
    let output = [];
    const active = " active";

    for (let page = 1; page <= pageNumbers; page++) {
      output.push(
        <li
          key={page}
          onClick={() =>
            this.setState({
              ...this.state,
              selectedPage: page,
            })
          }
          className={
            "page-item " + (this.state.selectedPage == page ? active : "")
          }
          style={{
            cursor: "pointer",
          }}
        >
          <a className="page-link">{page}</a>
        </li>
      );
    }
    return output;
  };

  render() {
    // if there is no movies don't show the table
    const { length: count } = this.state.movies;
    if (count === 0)
      return <h3 className="p-3">There is no movie available"</h3>;
    return (
      <div className="container">
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <i className="fa fa-heart" aria-hidden="true"></i>

        <h1>Movies</h1>
        {this.tableOfMovies()}

        <Pagination showPagination={this.handlePagination()} />
      </div>
    );
  }

  tableOfMovies = () => {
    const moviesPerPage = this.state.movies.slice(
      this.state.showInPage * (this.state.selectedPage - 1),
      this.state.showInPage * this.state.selectedPage
    );

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
