import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Nav() {

  const { session } = useSelector(store => store.session)

  return (
    <div>
      <div>
          <Link to="/">LOGOS</Link>
          <ul>
            <li><Link to="/registration">Регистрация</Link></li>
            <li><Link to="/login">Вход</Link></li>
          </ul>
        </div>
  
    {/* <nav>
      {
        (!session.firstname)
        ?
        <div>
          <Link to="/">LOGOS</Link>
          <ul>
            <li><Link to="/registration">Регистрация</Link></li>
            <li><Link to="/login">Вход</Link></li>
          </ul>
        </div>
      :
      <>
        <Link to='/main'>LOGOS</Link>
        <ul>
          <li><Link to="/profile">Личный кабинет</Link></li>
          <li><Link to="/logout">Выход</Link></li>
        </ul>
      </>
      }
    </nav> */}
    </div>
  );
}

export default Nav;
