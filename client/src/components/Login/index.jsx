import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { checkAuth, loginUser } from '../../redux/thunk/asyncUsers';

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { session } = useSelector(state => state.session);

  const login = event => {
    event.preventDefault()

    const { target } = event

    dispatch(
      loginUser({ 
        email: target.email.value, 
        password: target.password.value
      })
    )
  
    navigate('/profile')
  }
  
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card">
          <h2 className="card-title text-center">Вход в аккаунт</h2>
          <div className="card-body py-md-4">
            <form onSubmit={login}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between">
                <Link to='/'>Главная страница</Link>
                <button type='submit' className="btn btn-primary">Войти</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
