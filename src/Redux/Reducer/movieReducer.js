import { ALL_MOVIES } from "../Types/moviesType";

const initValue = { movies: [], pageCount: 0 };

export const moviesReducer = (state = initValue, action) => {
  switch (action.type) {
    case ALL_MOVIES:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
