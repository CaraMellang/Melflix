import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import media from "../lib/media";
import "./Detail.css";
import { fas, faStar } from "@fortawesome/free-solid-svg-icons";

const Detail = (props) => {
  const {
    location: { state },
  } = props;
  console.log(state);

  return (
    <>
      <Main>
        <section className="header-block">
          <div className="header-contents">
            <div className="thumnail-block">
              <img
                className="poster-img"
                src={state.poster}
                alt={state.title}
              />
            </div>
            <div className="header-contents-details">
              <div className="header-details-above">
                <h1>{state.title}</h1>
              </div>
              <div className="header-details-Below">
                평점
                <div className="header-details-average">{state.rating}</div>
                <div className="header-details-stars">
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="content">
          <p>{state.summary}</p>
        </div>
      </Main>
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  height: 100%;
  .content {
    padding: 5rem;
  }
  .poster-img {
    width: 15rem;
    border: 1px solid none;
    border-radius: 5px;
  }

  ${media.small} {
    flex-direction: column;
    width: 100%;
    align-items: center;
    .content {
      padding: 2rem;
    }
  }
`;
export default Detail;
