import React from "react";
import { Link } from "react-router-dom";

const MoviesCard = ({
  movieID,
  imageURL,
  date,
  title,
  vote_count,
  vote_avg,
}) => {
  return (
    <Link to={`/movie/${movieID}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${imageURL}`} alt={title} />
        <div className="info">
          <p className="movie-title">اسم الفيلم: {title}</p>
          <p className="movie-date">تاريخ الاصدار: 25{date}</p>
          <p className="vote-count">عدد المقيمين: {vote_count}</p>
          <p className="vote-avg">التقييم: {vote_avg}</p>
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;
