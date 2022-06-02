import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"

import { getNews } from '../../redux/thunk/news'

function Main() {
  const dispatch = useDispatch()

  const { news } = useSelector(state => state.news)

  useEffect(() => dispatch(getNews()), [ dispatch ])

  const renderItem = ({ id, title, text, updatedAt }) => {
    return <div className="col" key={'news-' + id}>
      <div className="row row--center"><h4>{title}</h4></div>
      <div>{text}</div>
      <br />
      <hr />
      <div className="row row--right caption">Опубликовано: {new Date(updatedAt).toLocaleDateString('ru')}</div>
      <br /><br />
    </div>
  }

  const renderList = () => {
    return news.map(item => renderItem(item))
  }

  const renderNews = () => {
    if (!news.length) {
      return <h4>Новостей нет.</h4>
    }

    return renderList()
  }

  return <div className="dialog dialog--full-width shadow">
    <div className="dialog__bar">Новости Logos!</div>
    <div className="dialog__content">
      <p className="text--center">Добро пожаловать!</p>
      <br />
      {renderNews()}
    </div>
  </div>
}

export default Main
