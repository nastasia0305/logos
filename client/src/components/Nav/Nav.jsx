
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Nav() {

  const { session } = useSelector(store => store.session)
  return (
    <>
      <header>
        <div className="container">
          <Link className="logo" to='/main'>LOGOS</Link>
          {/* <h1 class="logo"></h1> */}

          <nav>
            {
              (!session.firstname)
                ?

                // <Link to="/">LOGOS</Link>
                <ul>
                  <li><Link to="/registration">Регистрация</Link></li>
                  <li><Link to="/login">Вход</Link></li>
                  <li><Link to="/profile">Личный кабинет</Link></li>
                  {/* <li><Link to="/logout">Выход</Link></li> */}
                </ul>

                :
                <>
                  <ul>
                    <li><Link to="/profile">Личный кабинет</Link></li>
                    <li><Link to="/logout">Выход</Link></li>
                  </ul>
                </>
            }
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
