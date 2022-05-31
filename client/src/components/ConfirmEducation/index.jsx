import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateUser } from '../../redux/thunk/asyncUsers'

function ConfirmEducation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const update = event => {
    event.preventDefault()

    const { target } = event

    const cases = []
    for (const {value, checked} of target.case) {
      if (checked) {
        cases.push(value)
      }
    }
    const services = []
    for (const {value, checked} of target.service) {
      if (checked) {
        services.push(value)
      }
    }

    const data = {
      help: target.help.value,
      case: cases,
      service: services,
      education: target.education.value,
      experience: target.experience.value,
    }

    // TODO: написать обработку файлов
    // нужна multipart form data

    dispatch(updateUser(data))
    navigate('/profile')
  }

  return (
    <div className="dialog">
      <div className="dialog__bar">Подтверждение образования</div>
      <form onSubmit={update} className="form">
        <div className="row">
          <label htmlFor="help" className="label">Тип контракта</label>
          <select name="help" defaultValue="one" className="select">
            <option value="onetime">Разовый контракт</option>
            <option value="regular">Регулярный контракт</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="case" className="label">Характер дел</label>
          <input type="checkbox" name="case" value="criminal"/>Уголовное
          <input type="checkbox" name="case" value="arbitration"/>Арбитражное
          <input type="checkbox" name="case" value="tax"/>Налоговое
        </div>
        <div className="row">
          <label htmlFor="service" className="label">Тип услуг</label>
          <input type="checkbox" name="service" value="statement"/>Подача заявления
          <input type="checkbox" name="service" value="court"/>Поход в суд
          <input type="checkbox" name="service" value="consultation"/>Консультация
        </div>
        <div className="row">
          <label htmlFor="education" className="label">Образование</label>
          <input type="text" className="input" name="education" placeholder="Образование" />
        </div>
        <div className="row">
          <label htmlFor="experience" className="label">Опыт работы (лет)</label>
          <input type="number" className="input" name="experience" placeholder="Опыт работы" />
        </div>
        <div className="row">
          <label htmlFor="diploma" className="label">Диплом</label>
          <input type="file" className="input" name="diploma" />
        </div>
        <div className="row">
          <label htmlFor="certificate" className="label">Сертификат</label>
          <input type="file" className="input" name="certificate" />
        </div>
        <div className="row">
          <label htmlFor="employeBook" className="label">Трудовая книжка</label>
          <input type="file" className="input" name="employeBook" />
        </div>
        <button type="submit" className="button shadow">Оставить заявку</button>
      </form>
    </div>
  )
}

export default ConfirmEducation
