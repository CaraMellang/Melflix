import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GenreList from "../lib/GenreList";
// import "./Home.css";
import media from "../lib/media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";
import MovieListItem from "../components/MovieListItem";
import useMovie from "../components/hooks/useMovie";

const Genres = () => {
  //   const [movieList, setMovieList] = useState([]);
  //   const [genresName, setGenresName] = useState("all");
  //   const [loading, setLoading] = useState(true);
  //   const [activeId, setActiveId] = useState(0);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(10);
  const {
    movieList,
    loading,
    currentPage,
    postsPerPage,
    setCurrentPage,
    setPostsPerPage,
    onClick,
    activeId,
    genresName,
    toggle,
    onClickToggle,
  } = useMovie();

  //   const onClick = (e) => {
  //     // console.log(e.target.attributes.getNamedItem("name").value);
  //     // console.log(e.target.getAttribute("name"));
  //     //input button태그와 다르게 e.target.name으로 접근 안됨 위에 두 방식으로도 가능

  //     setLoading(true);
  //     setActiveId(parseInt(e.target.id));
  //     setGenresName(e.target.name);
  //     // setActiveId(parseInt(e.target.getAttribute("id"))); 특수한 경우에만 getAttributes쓸것.
  //     // setGenresName(e.target.getAttribute("name"));
  //     // console.log(e.target.getAttribute("name"));
  //     //컴포넌트가 리렌더링되어 렌더링이 끝나지 않을 때 null값을 반환하는 이슈가 있음 <- 정확하지않음
  //   };

  //   const getData = async (genresName, currentPage) => {
  //     if (genresName === null) {
  //       return;
  //     }
  //     const genresData = await axios.get(
  //       `https://yts-proxy.now.sh/list_movies.json?genre=${genresName}&page=${currentPage}`
  //     );
  //     console.log(genresData.data.data.movies);
  //     setMovieList(genresData.data.data.movies);
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     getData(genresName, currentPage);
  //     return () => {
  //       console.log("취소됨.");
  //     };
  //   }, [genresName, currentPage]);

  return (
    <Wrapper>
      <div className="sidebar">
        <div className="sidebar-mobile-tagmenu">
          <div className="sidebar-mobile-name" style={{ color: "white" }}>
            태그
          </div>
          <div className="sidebar-mobile-hamburger">
            <FontAwesomeIcon
              icon={faBars}
              onClick={onClickToggle}
              style={{ color: "white" }}
            />
          </div>
        </div>
        <div
          className={`sidebar-tag ${
            toggle === true ? "show-tag-menu" : "hide-tag-menu"
          }`}
        >
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
        <div className="hi">
          <div className="top-rated">{genresName.toUpperCase()}</div>
          {loading === true ? (
            ""
          ) : (
            <div className="movies">
              {movieList.map((data) => (
                <div className="movie-item-wrap">
                  <div className="movie-item">
                    <MovieListItem
                      key={data.id}
                      data={data}
                      // id={data.id}
                      // title={data.title}
                      // year={data.year}
                      // genres={data.genres}
                      // rating={data.rating}
                      // summary={data.summary}
                      // poster={data.large_cover_image}
                      // description={data.description_full}
                      // runtime={data.runtime}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            setPostsPerPage={setPostsPerPage}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .top-rated {
    color: white;
    font-weight: bold;
    border-bottom: 1px solid white;
    padding-top: 4.5rem;
    padding-bottom: 0.25rem;
  }
  .top-rated {
    margin-left: 2rem;
    width: 95%;
  }
  .sidebar {
    position: fixed;
    width: 100%;
    height: 1.5rem;
    margin-top: 3.5rem;
  }
  .sidebar-mobile-tagmenu {
    background-color: #242424;
    border: 1px solid #242424;
    z-index: 4;
    display: none;
  }

  .sidebar-tag {
    display: flex;
    text-align: start;
    flex-direction: column;
    z-index: 1;
  }
  .tag-box {
    width: 10rem;
    /* height: calc(100% / 7); */

    height: 2rem;
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
  .movies {
    display: flex;
    flex-wrap: wrap;
    color: white;
  }
  .movie-item-wrap {
    width: 20%;
  }
  .movie-item {
    padding: 1.25rem 2rem;
  }

  .hi {
    margin-left: 10rem;
  }

  .actives {
    background-color: #cc8330;
  }

  ${media.xlarge} {
    /* .top-rated {
      margin-left: 3rem;
      width: 95%;
    } */
    .sidebar-mobile-tagmenu {
      display: none;
    }
    /* .movie-item {
      margin: 1.25rem 2rem;
      width: 20%;
    } */
  }
  ${media.large} {
    .top-rated {
      margin-left: 3rem;
      width: 90%;
    }
    .sidebar-mobile-tagmenu {
      display: none;
    }
    .movie-item-wrap {
      width: 25%;
    }
    /* .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 16rem) / 4);
    } */
  }

  ${media.medium} {
    .top-rated {
      padding-top: 5.5rem;
      margin-left: 1.5rem;
      width: 92%;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
    }
    .sidebar-mobile-tagmenu {
      display: flex;
      justify-content: space-between;
      padding-left: 1rem;
      padding-right: 1rem;
      height: 2rem;
      align-items: center;
    }
    .sidebar-tag {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .hide-tag-menu {
      opacity: 0;
      height: 0;
      transition-property: height, opacity;
      transition: 0.1s ease-in;
      transform: translateY(-16rem);
    }
    .show-tag-menu {
      opacity: 1;
      height: 224px;
      transition-property: height, opacity;
      transition: 0.1s ease-in;
      transform: translateY(0rem);
    }
    .tag-box {
      width: 50%;
    }
    .hi {
      margin-left: 0;
    }

    .movie-item-wrap {
      width: 33.3%;
    }
  }
  ${media.small} {
    .top-rated {
      padding-top: 5.5rem;
      margin-left: 1.5rem;
      width: 90%;
    }
    .movie-item-wrap {
      width: 50%;
    }

    .hide-tag-menu {
      opacity: 0;
      height: 0;
      transition-property: height, opacity;
      transition: 0.1s ease-in;
      transform: translateY(-16rem);
    }
    .show-tag-menu {
      opacity: 1;
      height: 224px;
      transition-property: height, opacity;
      transition: 0.1s ease-in;
      transform: translateY(0rem);
    }

    ${media.xsmall} {
      .top-rated {
        padding-top: 5.5rem;
        margin-left: 1.5rem;
        width: 90%;
      }
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .hide-tag-menu {
        opacity: 0;
        height: 0;
        transition-property: height, opacity;
        transition: 0.1s ease-in;
        transform: translateY(-16rem);
      }
      .show-tag-menu {
        opacity: 1;
        height: 224px;
        transition-property: height, opacity;
        transition: 0.1s ease-in;
        transform: translateY(0rem);
      }
      .movie-item-wrap {
        width: 100%;
      }
    }
    ${media.xxsmall} {
      .top-rated {
        padding-top: 5.5rem;
        margin-left: 1.5rem;
        width: 85%;
      }
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .hide-tag-menu {
        opacity: 0;
        height: 0;
        transition-property: height, opacity;
        transition: 0.1s ease-in;
        transform: translateY(-16rem);
      }
      .show-tag-menu {
        opacity: 1;
        height: 224px;
        transition-property: height, opacity;
        transition: 0.1s ease-in;
        transform: translateY(0rem);
      }

      .movie-item-wrap {
        width: 100%;
      }
    }
  }
`;

export default React.memo(Genres);
