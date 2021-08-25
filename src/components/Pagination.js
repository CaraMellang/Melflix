import React, { useState } from "react";
import styled from "styled-components";
import media from "../lib/media";

const Pagination = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  setPostsPerPage,
}) => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [activeId, setActiveId] = useState(1);
  const onClick = (e) => {
    console.log("페이지네이션");
    setActiveId(parseInt(e.target.id));
    setCurrentPage(parseInt(e.target.id));
  };

  const onPrevClick = () => {
    console.log("prevClick");
    setPages(pages.map((item) => item - 5));
  };
  const onNextClick = () => {
    console.log("nextClick");
    setPages(pages.map((item) => item + 5));
  };

  return (
    <UlWrapper>
      <Ul>
        {pages[0] !== 1 && (
          <button onClick={onPrevClick} className="ul-button">
            {"<"}
          </button>
        )}
        {pages.map((item, index) => (
          <button
            key={index}
            id={item}
            onClick={onClick}
            className={`ul-items ${activeId === item && "p-actives"}`}
          >
            {item}
          </button>
        ))}
        <button onClick={onNextClick} className="ul-button">
          {">"}
        </button>
      </Ul>
    </UlWrapper>
  );
};

const UlWrapper = styled.div`
  display: flex;

  justify-content: center;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  width: fit-content;
  .ul-button {
    cursor: pointer;
    background-color: #cac6bd;
    border: none;
    border: 1px solid #cac6bd;
    color: #181818;
  }

  .ul-items {
    cursor: pointer;
    width: 30px;
    background-color: #181818;
    border: none;
    border: 1px solid #cac6bd;
    color: #cac6bd;
  }

  .p-actives {
    background-color: #cac6bd;
    color: #181818;
  }

  ${media.medium} {
    margin-right: 0;
  }

  ${media.small} {
    margin-right: 0;
  }

  ${media.xsmall} {
    margin-right: 0;
  }

  ${media.xxsmall} {
    margin-right: 0;
  }
`;

export default Pagination;
