import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import "./Home.css";

const Genres = () => {
  const [movieList, setMovieList] = useState([]);

  const getData = async () => {
    // const data = await axios.get(
    //   "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count"
    // );
    const data = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?genre=animation"
    );
    const genresData = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?genre=comedy"
    );
    console.log(genresData.data.data.movies);
    setMovieList(data.data.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navigation />
      <span style={{ color: "white" }}>장르별 검색</span>
      <br />
      {genreList.map((item, index) => (
        <span key={index} style={{ color: "white", marginRight: "5px" }}>
          {item.name}
        </span>
      ))}
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

const genreList = [
  {
    name: "COMEDY",
    value: "comedy",
  },
  {
    name: "SCI-FI",
    value: "sci-fi",
  },
  {
    name: "HORROR",
    value: "horror",
  },
  {
    name: "ROMANCE",
    value: "romance",
  },
  {
    name: "ACTION",
    value: "action",
  },
  {
    name: "THRILLER",
    value: "thriller",
  },
  {
    name: "DRAMA",
    value: "drama",
  },
  {
    name: "MYSTERY",
    value: "mystery",
  },
  {
    name: "CRIME",
    value: "crime",
  },
  {
    name: "ANIMATION",
    value: "animation",
  },
  {
    name: "ADVENTURE",
    value: "adventure",
  },
  {
    name: "FANTASY",
    value: "fantasy",
  },
  {
    name: "COMEDY-ROMANCE",
    value: "comedy-romance",
  },
  {
    name: "ACTION-COMEDY",
    value: "action-comedy",
  },
  {
    name: "SUPERHERO",
    value: "superhero",
  },
];

export default Genres;
