import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateUser } from '../../redux/thunk/asyncUsers'

import BasicForm from '../Registration/BasicForm'

function UpdateProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const update = event => {
    event.preventDefault()
    
    const data = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      fathersname: event.target.fathersname.value,
      email: event.target.email.value,
      city: event.target.city.value,
    }

    dispatch(updateUser(data))
    navigate('/profile')
  }

  return (
    <div className="dialog">
      <div className="dialog__bar">Обновление профиля</div>
      <form onSubmit={update} className="form">
        <BasicForm />
        <button type="submit" className="button shadow">Обновить</button>
      </form>
    </div>
  )
}

export default UpdateProfile
