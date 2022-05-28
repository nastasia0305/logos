import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {
  const { session } = useSelector(store => store.session)
  const { id } = session

  const renderLinks = () => {
    const links = []
    if (id) {
      links.push(
        { to: 'profile', title: 'Личный кабинет' },
        { to: 'logout', title: 'Выход' }
      )
    } else {
      links.push(
        { to: 'registration', title: 'Регистрация' },
        { to: 'login', title: 'Вход'}
      )
    }

    return <ul className="navigation__list">
      {links.map(({to, title}) => {
        return <li key={to} className="navigation__item">
          <Link to={'/' + to} className="link">{title}</Link>
        </li>
      })}
    </ul>
  }

  return <nav className="navigation">{renderLinks()}</nav>
}

export default Nav;
