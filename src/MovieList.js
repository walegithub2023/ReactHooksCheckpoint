//import React, MovieCard and Filter
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

//import bootstrap.min.css, Row, Col and Container
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

//declare and initialise state variables.
const MovieList = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  //Function to display Movie list

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating.includes(filterRating)
  );

  return (
    <>
      <div>
        <Filter
          setFilterTitle={setFilterTitle}
          setFilterRating={setFilterRating}
        />
      </div>

      <div>
        <h6 style={{ textAlign: "center" }}>MOVIE LIST</h6>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
