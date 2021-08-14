import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../lib/media";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";
import { yellow } from "chalk";

const Movie = ({
  id,
  title,
  year,
  genres,
  rating,
  summary,
  poster,
  description,
  runtime,
}) => {
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
            description,
            runtime,
          },
        }}
      >
        <div>
          <img src={poster} alt={title} />
          <Content>
            <Header>
              <span style={{ fontSize: "13px" }}>
                {title.slice(15) !== ""
                  ? `${title.slice(0, 15)}...`
                  : title.slice(0, 15)}
              </span>
              <span>{year}</span>
              <span style={{ fontSize: "13px" }}>
                <FontAwesomeIcon icon={faStar} style={{ color: "#f7cf1e" }} />
                {rating}/10.0
              </span>
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
    border: 1px solid none;
    border-radius: 5px;
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
