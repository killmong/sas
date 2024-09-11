import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="nav">
      <Link  to="/" >
      <img
        src="https://www.freeiconspng.com/uploads/emblem-ashoka-chakra-india-shrihub-background-23.png"
        alt="Ashoka Chakra"
        className="logo"
      />
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#page1">Preamble</a>
          </li>
          <li>
            <a href="#page3">Articles</a>
          </li>
          <li>
            <a href="#page3">IPC</a>
          </li>
          <li>
            <Link to="/quiz">Quizzes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
