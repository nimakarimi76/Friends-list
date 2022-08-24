import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "./common/paginate.js";

import { MoviesTable } from "./moviesTable";

import ListGroup from "./common/listGroup";
import LikeAllContext from "./likeAllContext.js";

class Movies extends Component {
  state = {
    movies: getMovies(),
    showInPage: 4,
    currentPage: 1,
    genres: getGenres(),
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
    likeAll: false,
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  handleLikeAll = () => {
    this.setState({ likeAll: !this.state.likeAll });
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
          <button
            className="mt-5 btn btn-outline-success"
            onClick={this.handleLikeAll}
          >
            {this.state.likeAll ? "Unlike all" : "Like all"}
          </button>
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
      sortColumn,
    } = this.state;

    const filteredMovies = selectedGenre
      ? allMovies.filter((m) => m.genre.name == selectedGenre)
      : allMovies;

    const moviesPerPage = paginate(filteredMovies, currentPage, showInPage);

    return (
      <React.Fragment>
        <p>Showing {filteredMovies.length} movies in the database</p>
        <LikeAllContext.Provider
          value={{
            likeAllState: this.state.likeAll,
            onLikeAllClick: this.handleLikeAll,
          }}
        >
          <MoviesTable
            movies={moviesPerPage}
            onLike={this.handleLike}
            onDelete={this.handleDeleteMovie}
            onSort={this.handleSort}
          />
        </LikeAllContext.Provider>

        <Pagination
          pageNumbers={Math.ceil(filteredMovies.length / this.state.showInPage)}
          currentPage={currentPage}
          onChangePage={this.handlePage}
        />
      </React.Fragment>
    );
  };
}

export default Movies;
