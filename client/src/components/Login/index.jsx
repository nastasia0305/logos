import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom'

import { loginUser } from '../../redux/thunk/asyncUsers'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { session } = useSelector(store => store.session)
// TODO: если сессия админа сделать навигацию на /admin вместо /profile
  // const { isAdmin } = session
  const { id } = session

  const checkAuth = () => {
    if (id) {
      return <Navigate to="/profile" replace={ true } />
    }
  }

  const login = event => {
    event.preventDefault()

    dispatch(
      loginUser({ 
        email: event.target.email.value, 
        password: event.target.password.value
      })
    )
  
    navigate('/profile')
  }
  
  return (
    <div className="dialog shadow">
      {checkAuth()}

      <div className="dialog__bar">Авторизация</div>
      <form onSubmit={login} className="form">
        <div className="row">
          <label htmlFor="email" className="label">E-mail</label>
          <input type="text" className="input" name="email" autoComplete="email" placeholder="E-mail" required />
        </div>
        <div className="row">
          <label htmlFor="password" className="label">Пароль</label>
          <input type="password" className="input" name="password" autoComplete="password" placeholder="Пароль" required />
        </div>
        <button type="submit" className="button shadow">Войти</button>
      </form>
    </div>
  )
}

export default Login
