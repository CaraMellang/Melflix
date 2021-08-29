import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function useMovie() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  let { pathname } = useLocation();

  pathname = pathname === '/' ? 'year' : 'rating';

  useEffect(() => {
    const getData = async currentPage => {
      const data = await axios.get(
        `https://yts-proxy.now.sh/list_movies.json?sort_by=${pathname}&&page=${currentPage}`
      );

      setMovieList(data.data.data.movies);
      setLoading(false);
    };

    getData(currentPage);
    setLoading(true);
  }, [currentPage, pathname]);

  return {
    movieList,
    loading,
    currentPage,
    postsPerPage,
    setCurrentPage,
    setPostsPerPage,
  };
}
