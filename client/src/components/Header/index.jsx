import React from 'react';

import { Link } from 'react-router-dom';

import Nav from "../Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="logo">LOGOS</Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header;
