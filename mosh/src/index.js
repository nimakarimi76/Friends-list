import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Counters from "./components/counters";
import Movies from "./components/movies";
import App from "./App";
import Excuse from "./components/excuses";
import MoviesDetails from "./components/moviesDetails";
import Users from "./components/users";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
      <NavLink
        className="nav-item nav-link text-light"
        to="/"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink className="nav-item nav-link text-light" to="/movies">
        Movies
      </NavLink>
      <NavLink className="nav-item nav-link text-light" to="/Excuse">
        Excuser
      </NavLink>
      <NavLink className="nav-item nav-link text-light" to="/Users">
        Users
      </NavLink>
    </div>
    <Routes>
      <Route path="/movies/:id" element={<MoviesDetails />} />
      <Route
        path="/movies"
        render={(props) => <Movies {...props} />}
        element={<Movies />}
      />
      {/* <Route path="/movies" element={<Movies />} /> */}
      <Route path="/excuse" element={<Excuse />} />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<h1>Page not found</h1>} />
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

reportWebVitals();
