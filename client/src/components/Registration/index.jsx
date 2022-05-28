import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { registerUser } from '../../redux/thunk/asyncUsers'

import BasicForm from './BasicForm'

function Registration(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registration = event => {
    event.preventDefault()
    
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      fathersname: event.target.fathersname.value,
      email: event.target.email.value,
      password: event.target.password.value,
      city: event.target.city.value,
      select: event.target.select.value,
    }

    dispatch(registerUser(data))
    navigate('/')
  }
  
  return (
    <div className="dialog shadow">
      <div className="dialog__bar">Регистрация</div>
      <form onSubmit={registration} className="form">
        <BasicForm />
        <div className="row">
          <label htmlFor="select" className="label">Роль</label>
          <select name="select" defaultValue="client" className="select">
            <option value="client">Клиент</option>
            <option value="lawyer">Юрист</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="password" className="label">Пароль</label>
          <input type="password" className="input" name="password" autoComplete="password" placeholder="Пароль" required />
        </div>
        <button type="submit" className="button shadow">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration
