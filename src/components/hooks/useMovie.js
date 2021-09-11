import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function useMovie() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [genresName, setGenresName] = useState("all");
  const [activeId, setActiveId] = useState(0);
  const [toggle, setToggle] = useState(false);
  let { pathname } = useLocation();
  pathname =
    pathname === "/"
      ? "year"
      : pathname === "/rating"
      ? "rating"
      : pathname === "/genres"
      ? "genres"
      : "";

  const onClick = (e) => {
    setLoading(true);
    setActiveId(parseInt(e.target.id));
    setGenresName(e.target.name);
    setToggle(false);
  };
  const onClickToggle = () => {
    setToggle((prev) => !prev);
    console.log("토글!", toggle);
  };

  useEffect(() => {
    const getData = async (genresName, currentPage) => {
      let data;
      if (pathname === "year" || pathname === "rating") {
        data = await axios.get(
          `https://yts-proxy.now.sh/list_movies.json?sort_by=${pathname}&&page=${currentPage}`
        );
      } else if (pathname === "genres") {
        data = await axios.get(
          `https://yts-proxy.now.sh/list_movies.json?genre=${genresName}&page=${currentPage}`
        );
      }
      setMovieList(data.data.data.movies);
      setLoading(false);
    };

    getData(genresName, currentPage);
    setLoading(true);
  }, [currentPage, genresName]);

  return {
    movieList,
    loading,
    currentPage,
    postsPerPage,
    setCurrentPage,
    setPostsPerPage,
    onClick,
    activeId,
    genresName,
    pathname,
    toggle,
    onClickToggle,
  };
}
