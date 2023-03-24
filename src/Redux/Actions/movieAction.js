import axios from "axios";
import { ALL_MOVIES, API_Movies } from "../Types/moviesType";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(API_Movies);
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&language=ar&query=${word}&page=1`
    );
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMoviesPage = (pageNum) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e2c06fdf2dd6bd6bd9c7d10ebb064ed5&language=ar&page=${pageNum}`
    );
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
