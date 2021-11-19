import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <Link className="" to="/" href="" class="logo">
            <img
              src="/images/logo/jveiga.png"
              className="image-logo"
              alt={"my logo"}
            />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          
            <ul className="menu">
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="Blog">Blog</Link>
              </li>
            </ul>
          
        </div>
      </header>
    );
}

export default Header;