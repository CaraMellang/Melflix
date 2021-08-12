import React from "react";
import styled from "styled-components";
import media from "../lib/media";

const Detail = (props) => {
  const {
    location: { state },
  } = props;
  console.log(state);

  return (
    <>
      <Main>
        <div className="pp">
          <img className="poster-img" src={state.poster} alt={state.title} />
        </div>
        <div className="content">
          <h1>{state.title}</h1>
          <p>{state.summary}</p>
        </div>
      </Main>
    </>
  );
};
const Main = styled.div`
  display: flex;
  color: white;
  align-items: center;
  height: 100%;
  .pp {
    padding: 2rem;
  }
  .content {
    padding: 5rem;
  }
  .poster-img {
    width: 20rem;
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
