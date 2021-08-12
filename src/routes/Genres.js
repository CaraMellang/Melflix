import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import Detail from "./Detail";
import "./Home.css";

const Genres = () => {
  const [movieList, setMovieList] = useState([]);
  const [genresName, setGenresName] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async (genresName) => {
    const genresData = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?genre=${genresName}&limit=30`
    );
    console.log(genresData.data.data.movies);
    setMovieList(genresData.data.data.movies);
    setLoading(false);
  };

  const onClick = (e) => {
    // console.log(e.target.attributes.getNamedItem("name").value);
    // console.log(e.target.getAttribute("name"));
    //input button태그와 다르게 e.target.name으로 접근 안됨 위에 두 방식으로도 가능
    setGenresName(e.target.getAttribute("name"));
    setLoading(true);
  };

  useEffect(() => {
    getData(genresName);
    return () => {
      console.log("취소됨.");
    };
  }, [genresName]);
  return (
    <>
      <Navigation />
      {loading === true ? (
        <span style={{ color: "white" }}>로딩중...</span>
      ) : (
        <>
          <div className="sidebar">
            <span style={{ color: "white" }}>장르별 검색</span>
            <br />
            <div style={{ display: "flex", gap: "5px" }}>
              {genreList.map((item, index) => (
                <span
                  key={index}
                  name={item.value}
                  onClick={onClick}
                  style={{
                    color: "white",
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
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
      )}
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
];

export default Genres;
