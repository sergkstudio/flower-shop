import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/constructor">Конструктор</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/login">Вход</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
