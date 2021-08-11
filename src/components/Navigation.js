import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navbarData = [
    {
      name: "최신순",
      path: "/",
    },
    {
      name: "평점순",
      path: "/rating",
    },
    {
      name: "옵션",
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
              <Link to={item.path}>{item.name}  </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
