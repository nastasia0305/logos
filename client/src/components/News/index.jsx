// TODO: доделать, написать запрос на получение списка новостей
// плюс отдельная страница для каждой новости
// плюс редактирование новости
// плюс удаление новости
// плюс деактивация новости

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getNews } from "../../redux/thunk/admin"


function News() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { news } = useSelector(state => state.admin)

  useEffect(() => dispatch(getNews()), [ dispatch ])

  dispatch(getNews)


  const renderItem = (item) => {
    return <div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <p>{item.isActive ? 'активна' : 'неактивна'}</p>
      <button onClick={() => navigate(`/news/${item.id}`)} className="button shadow">Редактировать</button>
    </div>
  }

  const renderList = () => {
    return <div>{news.map(el=> renderItem(el))}</div>
  }

  return (
    <> { news.length >=1
      ?
      <div>{renderList()}</div>
      :
      <h3>Новостей нет</h3>
    }
    </>
  )
}

export default News
