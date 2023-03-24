import React, { useState, useEffect } from "react";
import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  
  // Get Movie Details
  const getMovieDetails = async () => {
    const res = await axios.get(`
    https://api.themoviedb.org/3/movie/${params.id}?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&language=ar`);
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="movie-details">
      <div className="mov_d_content">
        <div className="movie_info">
          <div className="img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="movie_poster"
            />
          </div>
          <div className="details">
            <p className="movie-title">اسم الفيلم: {movie.original_title}</p>
            <p className="movie-date">تاريخ الاصدار: {movie.release_date}</p>
            <p className="vote-count">عدد المقيمين: {movie.vote_count}</p>
            <p className="vote-avg">التقييم: {movie.vote_average}</p>
          </div>
        </div>
        <div className="movie_description">
          <h2>القصة:</h2>
          {movie.overview ? (
            <p> {movie.overview} </p>
          ) : (
            <p>لا توجد قصة لعرضها</p>
          )}
        </div>
        <div className="buttons">
          <Link to={"/"}>
            <button className="btn">العوده للرئيسية</button>
          </Link>
          <a href={movie.homepage}>
            <button className="btn">مشاهدة الفيلم</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
