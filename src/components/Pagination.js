import React, { useState } from "react";
import styled from "styled-components";

const Pagination = ({
  currentPage,
  setCurrentPage,
  postsPerPage,
  setPostsPerPage,
}) => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [activeId, setActiveId] = useState(1);
  const onClick = (e) => {
    console.log("페이지네이션");
    setActiveId(parseInt(e.target.id));
    setCurrentPage(parseInt(e.target.id));
  };

  const onPrevClick = () => {
    console.log("prevClick");
    setPages(pages.map((item) => item - 10));
  };
  const onNextClick = () => {
    console.log("nextClick");
    setPages(pages.map((item) => item + 10));
  };

  return (
    <UlWrapper>
      <Ul>
        {pages[0] !== 1 && <button onClick={onPrevClick}>{"<"}</button>}
        {pages.map((item, index) => (
          <button
            key={index}
            id={item}
            onClick={onClick}
            className={` ${activeId === item && "p-actives"}`}
          >
            {item}
          </button>
        ))}
        <button onClick={onNextClick}>{">"}</button>
      </Ul>
    </UlWrapper>
  );
};

const UlWrapper = styled.div`
  display: flex;

  justify-content: flex-end;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-right: 10rem;
  width: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  li {
    padding: 8px;
  }

  .p-actives {
    background-color: #cc8330;
  }
`;

export default Pagination;
