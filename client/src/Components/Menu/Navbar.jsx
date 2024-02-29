import React from "react";
import { Link } from "react-router-dom";
import { guestMenu, simpleMenu, adminMenu } from "../Router/menuHandler";
import "./nav.css";

const Navbar = ({ userType }) => {
  let menu;
  switch (userType) {
    case "guest":
      menu = guestMenu;
      break;
    case "regular":
      menu = simpleMenu;
      break;
    case "admin":
      menu = adminMenu;
      break;
    default:
      menu = guestMenu; // Default to guest menu
  }

  const leftItems = menu.filter((item) => item.label === "");
  const rightItems = menu.filter((item) => item.label !== "");

  return (
    <nav className="navbar">
      <div className="nav-group left">
        {leftItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            onClick={item.onClickHandler}
            className="nav-link"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="nav-group right">
        {rightItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            onClick={item.onClickHandler}
            className="nav-link"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
