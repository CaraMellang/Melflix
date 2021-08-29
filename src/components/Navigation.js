import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import media from "../lib/media";
import "./Navigation.css";

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navbarData = [
    {
      name: "New",
      path: "/",
    },
    {
      name: "Rating",
      path: "/rating",
    },
    {
      name: "Genres",
      path: "/genres",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {navbarData.map((item, index) => (
          <li
            key={index}
            className="navbar-menu-item"
            style={{ display: "block" }}
          >
            <NavbarItems
              activeClassName="active"
              exact={item.name === "New"}
              //exact 안쓰면 New카테고리가 색이 고정됨
              //https://velog.io/@ksh4820/React-NavLink
              to={item.path}
            >
              {item.name}
            </NavbarItems>
          </li>
        ))}
        {/* <li className="navbar-menu-item-option">
          <Link to="/option">
            <FontAwesomeIcon icon={faCog} />
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

const NavbarItems = styled(NavLink)`
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #cc8330;
    color: #cc8330;
    &:hover {
      color: #b66810;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;


export const NavItemMenu = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  ${media.small} {
    flex-direction: column;
  }
`;

export const NavItem = styled(Link)`
  text-align: center;
  font-family: "Malgun Gothic";
  font-weight: 900;
  text-decoration: none;
  padding: 8px 12px;
  color: white;
  &:hover {
    background-color: #d49466;
    border-radius: 4px;
  }

  ${media.small} {
    justify-content: center;
    width: 100%;
    padding: 0px;
    padding-top: 12px;
    padding-bottom: 12px;
    display: ${(props) => (props.clickbtn === "false" ? "none" : "flex")};
  }
`;

export const NavLinks = styled.div`
  color: white;
  .sns-icon {
    padding-top: 14px;
    padding-right: 12px;
  }
  ${media.small} {
    display: ${(props) => (props.clickbtn === "false" ? "none" : "block")};
  }
`;

export const ToggleBtn = styled.div`
  display: none;
  position: absolute;
  top: 12px;
  right: 32px;
  font-size: 24px;
  color: black;
  ${media.small} {
    display: block;
  }
`;

export const NavbarItemsBlock = styled.div`
  display: flex;
  flex: 1.75 1 auto;
  justify-content: space-between;

  ${media.small} {
    justify-content: none;
    flex-direction: column;
  }
`;

export default Navigation;
