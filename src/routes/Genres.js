import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import Detail from "./Detail";
import "./Home.css";
import "./Genres.css";

const Genres = () => {
  const [movieList, setMovieList] = useState([]);
  const [genresName, setGenresName] = useState("all");
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(0);

  const onClick = (e) => {
    // console.log(e.target.attributes.getNamedItem("name").value);
    // console.log(e.target.getAttribute("name"));
    //input button태그와 다르게 e.target.name으로 접근 안됨 위에 두 방식으로도 가능

    setLoading(true);
    setActiveId(parseInt(e.target.getAttribute("id")));
    setGenresName(e.target.getAttribute("name"));
    console.log(e.target.getAttribute("name"));
    //컴포넌트가 리렌더링되어 렌더링이 끝나지 않을 때 null값을 반환하는 이슈가 있음
  };

  const getData = async (genresName) => {
    if (genresName === null) {
      return;
    }
    const genresData = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?genre=${genresName}&limit=10`
    );
    console.log(genresData.data.data.movies);
    setMovieList(genresData.data.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getData(genresName);
    return () => {
      console.log("취소됨.");
    };
  }, [genresName]);
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-tag">
          {genreList.map((item, index) => {
            return (
              <div
                key={index}
                id={index}
                name={item.value}
                className={`tag-box ${activeId === index && "actives"}`}
                onClick={onClick}
              >
                <p className="tag-box-contents">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="hi" style={{ marginLeft: "10rem" }}>
          {loading === true ? (
            ""
          ) : (
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
                  description={data.description_full}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const genreList = [
  {
    id: 1,
    name: "ALL",
    value: "all",
  },
  {
    id: 2,
    name: "COMEDY",
    value: "comedy",
  },
  {
    id: 3,
    name: "SCI-FI",
    value: "sci-fi",
  },
  {
    id: 4,
    name: "HORROR",
    value: "horror",
  },
  {
    id: 5,
    name: "ROMANCE",
    value: "romance",
  },
  {
    id: 6,
    name: "ACTION",
    value: "action",
  },
  {
    id: 7,
    name: "THRILLER",
    value: "thriller",
  },
  {
    id: 8,
    name: "DRAMA",
    value: "drama",
  },
  {
    id: 9,
    name: "MYSTERY",
    value: "mystery",
  },
  {
    id: 10,
    name: "CRIME",
    value: "crime",
  },
  {
    id: 11,
    name: "ANIMATION",
    value: "animation",
  },
  {
    id: 12,
    name: "ADVENTURE",
    value: "adventure",
  },
  {
    id: 13,
    name: "FANTASY",
    value: "fantasy",
  },
];

export default React.memo(Genres);
