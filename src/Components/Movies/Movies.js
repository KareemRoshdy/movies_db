import React, { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";
import PaginationComp from "../Pagination/Pagination";
import MoviesCard from "./MoviesCard";
import { useDispatch, useSelector } from "react-redux";
import "./MoviesCard.css";
import { getAllMovie } from "../../Redux/Actions/movieAction";

const Movies = ({ getPage }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  // Get All Movies By Axios
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <div className="movies">
      <div className="movies-content">
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movieID={movie.id}
                title={movie.original_title}
                imageURL={movie.poster_path}
                date={movie.release_date}
                vote_count={movie.vote_count}
                vote_avg={movie.vote_average}
              />
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
      {movies.length >= 1 ? <PaginationComp getPage={getPage} /> : null}
    </div>
  );
};

export default Movies;
