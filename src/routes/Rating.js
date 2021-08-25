import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import Pagination from "../components/Pagination";
import media from "../lib/media";
import "./Home.css";

const Rating = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getData = async (currentPage) => {
    const data = await axios.get(
      `https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${currentPage}`
    );
    console.log(data.data.data.movies);
    setMovieList(data.data.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getData(currentPage);
    return () => {
      console.log("취소됨.");
    };
  }, [currentPage]);
  return (
    <Wrapper>
      {loading === true ? (
        <span style={{ color: "white" }}>로딩중...</span>
      ) : (
        <div className="hi">
          <div className="movies">
            {movieList.map((data) => (
              <div className="movie-item">
                <Movie
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  genres={data.genres}
                  rating={data.rating}
                  summary={data.summary}
                  description={data.description_full}
                  runtime={data.runtime}
                  poster={data.large_cover_image}
                />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            postsPerPage={postsPerPage}
            setPostsPerPage={setPostsPerPage}
          />
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${media.xlarge} {
    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 20rem) / 5);
    }
  }
  ${media.large} {
    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 16rem) / 4);
    }
  }

  ${media.medium} {
    .movies {
      /* padding-left: 2.5%;
    padding-right: 2.5%; */
      padding-left: 0;
      padding-right: 0;
      gap: 2rem;
    }

    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 16rem) / 3);
    }
  }
  ${media.small} {
    .movies {
      gap: 1.5rem;
    }

    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 9.5rem) / 2);
    }

    ${media.xsmall} {
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .movies {
        gap: 0.45rem;
      }

      .movie-item {
        margin: 1.25rem 2rem;
        width: calc((100% - 1rem) / 3);
      }
    }
    ${media.xxsmall} {
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .movies {
        padding-left: 2%;
        padding-right: 2%;
        gap: 5px;
      }
      .movie-item {
        margin: 1.25rem 2rem;
        width: 100%;
      }
    }
  }
`;

export default Rating;
