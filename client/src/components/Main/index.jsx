import React from 'react'

import { useSelector } from 'react-redux'

function Main() {
  const { session } = useSelector(store => store.session)
  const { id } = session

  const renderContent = () => {
    if (id) {
      return <div className="dialog shadow">
        <div className="dialog__bar">Новости Logos!</div>
        <div className="dialog__content">
          <p>Добро пожаловать!</p>
          <p>Текст для авторизованный пользователей.</p>
        </div>
      </div>
    }

    return <div className="dialog shadow">
      <div className="dialog__bar">Новости Logos!</div>
      <div className="dialog__content">
        <p>Добро пожаловать!</p>
        <p>У нас хорошие новости для новых пользователей!</p>
      </div>
    </div>
  }

  return (<div>{renderContent()}</div>)
}

export default Main
