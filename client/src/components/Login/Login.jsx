import React from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/thunk/asyncUsers';
import Main from '../Main/Main';


function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);
    dispatch(loginUser(data))
    navigate('/profile')
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">

            <div className="placeholder-form">
              <div className="card-body py-md-4">
                <div className="login-link">
                  <h2 className="card-title text-center">Вход в аккаунт</h2>
                  <Link to='/'>Главная страница</Link>
                </div>
                <form _lpchecked="1" onSubmit={handleSubmit}>
                  <div className="placeholder-container">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder=" "
                    />
                    <label>Email</label>
                  </div>
                  <div className="placeholder-container">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder=" "
                    />
                    <label>Пароль</label>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <button type='submit' className="btn btn-primary">Войти</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >


  );
}

export default Login;



