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
                <h1 className="above-title">
                  {state.title} ({state.year})
                </h1>
                <div className="header-year-genres">
                  <div>-Genres</div>
                  <div
                    className="header-genres"
                    style={{ paddingLeft: "1rem" }}
                  >
                    {state.genres.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="header-details-Below">
                <div
                  className="header-runtime-block"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div className="header-runtime-title">-Total Runtime</div>
                  <div
                    className="header-runtime-total"
                    style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}
                  >
                    {state.runtime === 0 ? "none" : `${state.runtime} Hours`}
                  </div>
                </div>
                <div className="header-details-average">
                  <div style={{ marginBottom: "1rem" }}>-Rating</div>
                  <div
                    style={{
                      paddingLeft: "1rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#f7cf1e" }}
                    />
                    {state.rating}
                  </div>
                </div>
                <div className="header-details-stars"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="content-wrap">
            <div className="content-description">
              <h1
                style={{
                  borderBottom: "1px solid black",
                  paddingBottom: "0.5rem",
                }}
              >
                Description
              </h1>
            </div>
            <p>{state.description === "" ? "none" : state.description}</p>
          </div>
        </section>
      </Main>
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  .header-block {
    padding-top: 6em;
    padding-bottom: 3em;
    width: 95%;
  }

  .header-contents {
    display: flex;
    margin: 0 auto;
    padding-left: 10rem;
    background-color: #181818;
  }
  .above-title {
    border-bottom: 1px solid white;
    margin-top: 4rem;
    font-size: 2.5rem;
    padding-bottom: 0.5rem;
  }

  .header-contents-details {
    display: flex;
    flex-direction: column;
    width:65%;
    justify-content: space-between;
    margin-left: 6rem;
    padding-bottom: 3rem;
  }

  .header-year-genres {
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    flex-direction: column;
    justify-content: space-around;
  }

  .header-genres {
    display: flex;
    gap: 1rem;
  }
  .content {
    background-color: #9e9e9e;
    color: #181818;
    font-weight: bold;
    padding-top: 0;
  }
  .content-description {
    padding-top: 1.5rem;
  }
  .content-wrap {
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 10rem;
  }
  .header-details-Below {
    font-size: 1.5rem;
    font-weight: bold;
  }
  /*align-items는 justify와는 반대로 세로를 기준으로 정렬함*/

  .poster-img {
    width: 20rem;
    border: 1px solid none;
    border-radius: 5px;
  }
  ${media.xlarge} {
    .header-block {
      width: 1440px;
    }
    .content {
      width: 1440px;
    }
    .header-contents {
      padding-left: 10rem;
    }
  }
  ${media.large} {
    .header-block {
      width: 1024px;
    }
    .header-contents {
      padding-left: 5rem;
    }
    .content {
      width: 1024px;
    }
    .poster-img {
      width: 20rem;
    }
  }
  ${media.medium} {
    .header-block {
      width: 768px;
    }
    .header-contents {
      padding-left: 2rem;
    }
    .content {
      width: 768px;
    }
    .header-contents-details {
      display: flex;
      flex-direction: column;
      width: 50%;
      justify-content: space-between;
      margin-left: 2rem;
      padding-bottom: 3rem;
    }
  }

  ${media.small} {
    flex-direction: column;
    width: 100%;
    align-items: center;
    .header-block {
      width: 425px;
    }
    .header-contents {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .content {
      width: 425px;
    }
    .thumnail-block {
      display: flex;
      justify-content: center;
    }

    .header-contents-details {
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 4rem;
      padding-bottom: 1rem;
    }

    
    .above-title {
      margin-top: 2rem;
      margin-right: 0.5rem;
      font-size: 1.75rem;
    }
    .header-year-genres {
      font-size: 1.25rem;
    }
    .header-details-Below {
      font-size: 1.25rem;
    }
    .content-description {
      padding-top: 0.5rem;
    }
  }
  ${media.xsmall} {
    .header-block {
      width: 375px;
    }
    .header-contents {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .content {
      width: 375px;
    }
    .thumnail-block {
      display: flex;
      justify-content: center;
    }

    .header-contents-details {
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 2rem;
      padding-bottom: 1rem;
    }

    .above-title {
      margin-top: 2rem;
      margin-right: 0.5rem;
      font-size: 1.75rem;
    }
    .header-year-genres {
      font-size: 1.25rem;
    }
    .header-details-Below {
      font-size: 1.25rem;
    }
    .content-description {
      padding-top: 0.5rem;
    }
  }
  ${media.xxsmall} {
    .header-block {
      width: 320px;
    }
    .header-contents {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .content {
      width: 320px;
    }
    .thumnail-block {
      display: flex;
      justify-content: center;
    }

    .header-contents-details {
      display: flex;
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 2rem;
      padding-bottom: 1rem;
    }

    .above-title {
      margin-top: 2rem;
      margin-right: 0.5rem;
      font-size: 1.75rem;
    }
    .header-year-genres {
      font-size: 1.25rem;
    }
    .header-details-Below {
      font-size: 1.25rem;
    }
    .content-description {
      padding-top: 0.5rem;
    }
  }
`;
export default Detail;
