import React from 'react';
import { Link } from 'react-router-dom';
import './UI.css';
import '../../App.css';


const Header = () => {
  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="logo"><Link to="/">Aijana brows</Link></div>
        <div className="header__links">
          <Link to="/my-works">Мои работы</Link>
          <Link to="/book-place">Записаться на процедуру</Link>
        </div>
      </div>
    </div>

  );
};

export default Header;