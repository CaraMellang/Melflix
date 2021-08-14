import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import GenreList from "../lib/GenreList";
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
    setActiveId(parseInt(e.target.id));
    setGenresName(e.target.name);
    // setActiveId(parseInt(e.target.getAttribute("id"))); 특수한 경우에만 getAttributes쓸것.
    // setGenresName(e.target.getAttribute("name"));
    // console.log(e.target.getAttribute("name"));
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
    <Wrapper>
      <div className="sidebar">
        <div className="sidebar-tag">
          {GenreList.map((item, index) => {
            return (
              <button
                key={index}
                id={index}
                name={item.value}
                className={`tag-box ${activeId === index && "actives"}`}
                onClick={onClick}
              >
                {item.name}
                {/* <p className="tag-box-contents">{item.name}</p> */}
              </button>
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
                  runtime={data.runtime}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #242424;
    width: 10rem;
    margin-top: 3.5rem;
    border: 1px solid #242424;
    border-radius: 0 0 5px 5px;
  }

  .sidebar-tag {
    display: flex;
    text-align: start;
    flex-direction: column;
  }
  .tag-box {
    width: 10rem;
    height: 3.5rem;
    font-weight: 1000;
    background-color: #3d3d3d;
    border: 1px solid #3d3d3d;
  }
  .tag-box:hover {
    padding-left: 0;
    transition: all 0.4s;
    background-color: #555555;
    color: #cc8330;
  }

  .tag-box-contents {
    padding-left: 2rem;
  }

  .actives {
    background-color: #cc8330;
  }
`;

export default React.memo(Genres);
