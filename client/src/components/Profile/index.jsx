import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import Chats from '../Chats'
import Greeting from '../Greeting'
import Support from '../Support'
import RequestLawyer from '../RequestLawyer'
import TakeOrder from '../TakeOrder'
import { getAllRequest } from '../../redux/thunk/getAllRequest'
import { Navigate, useNavigate } from 'react-router-dom'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { session } = useSelector(store => store.session)
  const { anketa } = useSelector(store => store.anketa)
  const messageReq = anketa.message
  const { isLawyer, isValidate } = session
  const { support } = useSelector(store => store.support)
  const { message } = support
  const [state, setState] = useState(1)
  const { id } = session

console.log(session);


  const getButtonClassName = (index) => {
    const result = ['button', 'shadow']
    if (state === index) {
      result.push('profile__button--active')
    }
    return result.join(' ')
  }

  const sendFetchToRequest = () => {
    dispatch(getAllRequest(id))
    setState(5)
  }

  const renderButtonBySession = () => {
    if (isLawyer) {
      if (isValidate) {
        return <button onClick={sendFetchToRequest} className={getButtonClassName(5)}>Взять заказ</button>
      }
      return <button onClick={() => setState(5)} className={getButtonClassName(5)} disabled>Взять заказ</button>
    }
    return <button onClick={() => setState(4)} className={getButtonClassName(4)}>Запросить юриста</button>
  }

  const renderContent = () => {
    switch (state) {
      case 2: {
        return <Chats />
      }
      case 3: {
        return message ? <h2>{message}</h2> : <Support />
      }
      case 4: {
        return messageReq ? <h2>{messageReq}</h2> : <RequestLawyer />
      }
      case 5: {
        return <TakeOrder />
      }

      case 1:
      default: {
        return <Greeting />
      }
    }
  }

// useEffect(() => {
//   if (session.isAdmin) {
//     return <Navigate to="/admin" replace={true} />
//   }
// }, [])

  const checkAdmin = () => {
    if (session.isAdmin) {
      return <Navigate to="/admin" replace={true} />
    }
  }

  return (
    <div className="dialog dialog--full-width">
      {checkAdmin()}
      {/* TODO: написать в подобных страницах проверку на наличие сессии, иначе редиректить на главную, пример смотреть на страницах логина и регистрации, функция checkAuth */}
      <div className="dialog__bar">Личный кабинет</div>
      <div className="profile">
        <div className="profile__sidebar">
          <button onClick={() => setState(1)} className={getButtonClassName(1)}>Профиль</button>
          <button onClick={() => setState(2)} className={getButtonClassName(2)}>Чаты</button>
          <button onClick={() => setState(3)} className={getButtonClassName(3)}>Служба поддержки</button>

          {renderButtonBySession()}
        </div>
        <div className="profile__content">{renderContent()}</div>
      </div>
    </div>
  )
}

export default Profile
