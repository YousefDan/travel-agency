import { useState } from "react";
import "./header.css";
import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <div
        onClick={() => setToggle(!toggle)}
        id="menu-btn"
        className="fas fa-bars"
      ></div>
      <a href="#" className="logo">
        <i className="fas fa-paper-plane"></i>
        Travel
      </a>
      <Navbar toggle={toggle} />
      <a className="book-btn" href="#book-form">
        Book Now
      </a>
    </header>
  );
};

export default Header;
