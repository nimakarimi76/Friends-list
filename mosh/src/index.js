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

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="">
      <Link to="/">Home</Link>
      <Link className="m-5" to="/movies">
        Movies
      </Link>
      <Link to="/Excuse">Excuser</Link>
      <Link className="mx-4" to="/Users">
        Users
      </Link>
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
