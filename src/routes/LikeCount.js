import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import "./Home.css";

const LikeCount = () => {
  const [movieList, setMovieList] = useState([]);

  const getData = async () => {
    const data = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count"
    );
    console.log(data.data.data.movies);
    setMovieList(data.data.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navigation />
      좋아요순!
      <div className="hi">
        <div className="movies">
          {movieList.map((data) => (
            <Movie
              key={data.id}
              id={data.id}
              title={data.title}
              year={data.year}
              genres={data.genres}
              rating={data.rating}
              summary={data.summary}
              poster={data.large_cover_image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LikeCount;
