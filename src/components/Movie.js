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
        <img
          src={poster}
          alt={title}
        />
        <Content>
          <Header>
            <span>{id}</span>
            <span>{title}</span>
            <span>{year}</span>
            <span>{rating}</span>
          </Header>
          <ul style={{ padding: 0 }}>
            {genres.map((genres, index) => (
              <li key={index} style={{ display: "block" }}>
                {genres}
              </li>
            ))}
          </ul>
          <br />
          <p>{summary.slice(0, 150)}...</p>
        </Content>
      </Wraper>
    </>
  );
};

const Wraper = styled(Link)`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  width: 400px;
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
