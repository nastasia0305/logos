import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { registerUser } from '../../redux/thunk/asyncUsers'

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
        <input type="text" className="input" name="firstname" placeholder="Имя" required />
        <input type="text" className="input" name="lastname" placeholder="Фамилия" required />
        <input type="text" className="input" name="fathersname" placeholder="Отчество" />
        <input type="email" className="input" name="email" autoComplete="email" placeholder="E-mail" required />
        <input type="password" className="input" name="password" autoComplete="password" placeholder="Пароль" required />
        <input type="text" className="input" name="city" placeholder="Город" required />
        <select name="select" defaultValue="client" className="select">
          <option value="client">Клиент</option>
          <option value="lawyer">Юрист</option>
        </select>
        <button type="submit" className="button shadow">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration
