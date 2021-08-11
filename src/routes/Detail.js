import React from "react";
import styled from "styled-components";
import media from "../lib/media";

const Detail = (props) => {
  const {
    location: { state },
  } = props;
  console.log(state);
  const Main = styled.div`
    display: flex;
    .pp {
      width: 30%;
    }
    .back-img {
      padding: 30px;
      height: 100%;
      background-image: url(${state.poster});
      background-repeat: no-repeat;
      border-radius: 5px;
    }

    ${media.small} {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  `;
  return (
    <>
      <Main>
        <div className="pp">
          <div className="back-img"></div>
        </div>
        <div>
          <h1>{state.title}</h1>
          <p>{state.summary}</p>
        </div>
      </Main>
    </>
  );
};

export default Detail;
