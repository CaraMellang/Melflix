import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../lib/media";

const Movie = ({ id, title, year, genres, rating, summary, poster }) => {
  return (
    <>
      <Wraper
        to={{
          pathname: `/movie/${id}`,
          state: {
            title,
            year,
            genres,
            rating,
            summary,
            poster,
          },
        }}
      >
        <div>
          <img src={poster} alt={title} />
          <Content>
            <Header>
              <span style={{ fontSize: "13px" }}>{title.slice(0, 15)}</span>
              <span>{year}</span>
              <span>{rating}</span>
            </Header>
          </Content>
        </div>
      </Wraper>
    </>
  );
};

const Wraper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid none;
  border-radius: 5px;
  span {
    margin: 0;
  }
  img {
    max-width: 150px;
    width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  p {
    justify-content: center;
    text-align: center;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default Movie;
