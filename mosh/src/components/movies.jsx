import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "./common/paginate.js";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: getMovies(),
    showInPage: 4,
    currentPage: 1,
    genres: getGenres(),
    selectedGenre: "Comedy",
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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
    // const allMovies = getMovies();
    // const filteredMovies =
    //   genre == "all"
    //     ? allMovies
    //     : allMovies.filter((m) => m.genre.name == genre);
    // this.setState({ movies: filteredMovies });
  };

  render() {
    // if there is no movies don't show the table
    const { length: count } = this.state.movies;
    if (count === 0)
      return <h3 className="p-3">There is no movie available"</h3>;
    return (
      <div className="container row">
        <div className="col-2 mt-5">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <h1>Movies</h1>
          {this.tableOfMovies()}
        </div>
      </div>
    );
  }

  tableOfMovies = () => {
    const {
      movies: allMovies,
      showInPage,
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies = selectedGenre
      ? allMovies.filter((m) => m.genre.name == selectedGenre)
      : allMovies;

    const moviesPerPage = paginate(filteredMovies, currentPage, showInPage);

    return (
      <React.Fragment>
        <p>Showing {filteredMovies.length} movies in the database</p>
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
        <Pagination
          pageNumbers={Math.ceil(filteredMovies.length / this.state.showInPage)}
          currentPage={currentPage}
          showInPage={showInPage}
          onChangePage={this.handlePage}
        />
      </React.Fragment>
    );
  };
}

export default Movies;
