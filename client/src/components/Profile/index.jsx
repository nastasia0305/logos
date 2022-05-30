import React, { useState } from 'react'

import { useSelector } from 'react-redux'

import Chats from '../Chats'
import Greeting from '../Greeting'
import Support from '../Support'
import RequestLawyer from '../RequestLawyer'
import TakeOrder from '../TakeOrder'

function Profile() {
  const { session } = useSelector(store => store.session)

  const [state, setState] = useState(1)
  console.log("🚀 ~ Profile ~ state", state)

  const getButtonClassName = (index) => {
    const result = ['button', 'shadow']
    if (state === index) {
      result.push('profile__button--active')
    }
    return result.join(' ')
  }

  const renderButtonBySession = () => {
    if (session.isLawyer) {
      return <button onClick={() => setState(5)} className={getButtonClassName(5)}>Взять заказ</button>
    }

    return <button onClick={() => setState(4)} className={getButtonClassName(4)}>Запросить юриста</button>
  }

  const renderContent = () => {
    switch (state) {
      case 2: {
        return <Chats />
      }
      case 3: {
        return <Support />
      }
      case 4: {
        return <RequestLawyer />
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

  return (
    <div className="dialog dialog--full-width">
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
