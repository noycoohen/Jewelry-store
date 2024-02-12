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
    case "simple":
      menu = simpleMenu;
      break;
    case "admin":
      menu = adminMenu;
      break;
    default:
      menu = guestMenu; // Default to guest menu
  }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {menu.map((item, index) => (
          <li key={index} className="nav-item">
            <Link to={item.to}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
