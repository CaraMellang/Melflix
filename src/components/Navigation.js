import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const navbarData = [
    {
      name: "Homt",
      path: "home",
    },
    {
      name: "Homt",
      path: "home",
    },
    {
      name: "Homt",
      path: "home",
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
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
