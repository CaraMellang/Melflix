import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      name: "Like",
      path: "/like_count",
    },
    {
      name: "Option",
      path: "/option",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          {navbarData.map((item, index) => (
            <li
              key={index}
              className="navbar-menu-item"
              style={{ display: "block" }}
            >
              <Link to={item.path}>{item.name} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export const Navbarsexy = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #263343;
  text-decoration: none;
  padding: 8px 12px;
  margin: 0px;
  .nav-logo {
    flex: 2.5 1 auto;
  }

  ${media.small} {
    flex-direction: column;

    .nav-logo {
      align-items: flex-start;
      width: fit-content;
    }
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
