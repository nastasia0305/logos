import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { activateNews, getNews } from "../../redux/thunk/admin"

function AdminNews() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { news } = useSelector(state => state.admin)

  useEffect(() => dispatch(getNews()), [ dispatch ])

  const activate = (data) => {
    dispatch(activateNews(data))
    dispatch(getNews())
  }

  const renderHeader = () => {
    return <thead>
      <tr>
        <th>Заголовок</th>
        <th>Текст</th>
        <th>Публикация</th>
        <th>Действия</th>
      </tr>
    </thead>
  }

  const renderItem = ({id, title, text, isActive}) => {
    return <tr key={'news-' + id}>
      <td className="text--center">{title}</td>
      <td className="text--center">{text}</td>
      <td className="text--center">{isActive ? 'Да' : 'Нет'}</td>
      <td className="text--center">
        <button onClick={() => navigate(`/admin/news/${id}`)} className="button shadow">Редактировать</button>
        <button onClick={() => activate({ id, isActive: !isActive })} className="button shadow">{isActive ? 'Снять с публикации' : 'Опубликовать'}</button>
      </td>
    </tr>
  }

  const renderList = () => {
    return <tbody>{news.map(item => renderItem(item))}</tbody>
  }

  const renderContent = () => {
    if (news.length) {
      return <div>
        <table className="table">{renderHeader()}{renderList()}</table>
        <br />
        <div className="row row--center">
          <button onClick={() => navigate(`/admin/news/create`)} className="button shadow">Создать новость</button>
        </div>
      </div>
    }

    return <div className="row row--center"><h3>Новых данных нет</h3></div>
  }

  return renderContent()
}

export default AdminNews
