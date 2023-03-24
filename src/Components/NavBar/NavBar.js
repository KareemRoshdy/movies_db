import React from "react";
import "./NavBar.css";
import logo from "../../img/logo2.png";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../../Redux/Actions/movieAction";
import axios from "axios";
const NavBar = () => {
  const showInput = () => {
    document.querySelector(".input-search").classList.add("active");
    document.querySelector(".fa-times").classList.add("show");
    document.querySelector(".fa-search").classList.add("hidden");
  };
  const hiddenInput = () => {
    document.querySelector(".input-search").classList.remove("active");
    document.querySelector(".fa-times").classList.remove("show");
    document.querySelector(".fa-search").classList.remove("hidden");
  };

  const dispatch = useDispatch();

  const onSearch = (word) => {
    search(word);
  };

  // Search in API
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="form">
          <input
            onChange={(e) => onSearch(e.target.value)}
            className="input-search"
            type="text"
            placeholder="ابحث"
          />
          <div className="icons">
            <i onClick={showInput} className="fas fa-search"></i>
            <i onClick={hiddenInput} className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
