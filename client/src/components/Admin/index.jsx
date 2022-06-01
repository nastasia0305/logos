import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import AdminLawyers from '../AdminLawyers'
import News from '../News';

function Admin() {
  const navigate = useNavigate()

  const { session } = useSelector(store => store.session)
  const { isAdmin } = session

  useEffect(() => {
    if (!isAdmin) {
      navigate('/')
    }
  }, [ isAdmin, navigate ])

  const [ state, setState ] = useState(1)
  
  const getButtonClassName = (index) => {
    const result = ['button', 'shadow']
    if (state === index) {
      result.push('profile__button--active')
    }
    return result.join(' ')
  }

  const renderContent = () => {
    switch (state) {
      case 2: {
      return <News />
      }
      // case 3: {
      //   return <AdminSupport />
      // }
      // case 4: {
      //   return <AdminOrder />
      // }

      case 1:
      default: {
        return <AdminLawyers />
      }
    }
  }

  return (
    <div className="dialog dialog--full-width">
      <div className="dialog__bar">Панель управления администратора</div>
      <div className="profile">
        <div className="profile__sidebar">
          <button onClick={() => setState(1)} className={getButtonClassName(1)}>Юристы</button>
          <button onClick={() => setState(2)} className={getButtonClassName(2)}>Новости</button>
          <button onClick={() => setState(3)} className={getButtonClassName(3)}>Служба поддержки</button>
          <button onClick={() => setState(4)} className={getButtonClassName(4)}>Заказы</button>
        </div>
        <div className="profile__content">{renderContent()}</div>
      </div>
    </div>
  )
}

export default Admin
