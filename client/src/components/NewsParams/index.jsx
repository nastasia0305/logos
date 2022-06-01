import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editNews } from '../../redux/thunk/admin';

function NewsParams(props) {
  const {id} = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { news } = useSelector(state => state.admin)

  const item = news.filter(el => el.id === +id)

  const updateNews = event => {
    event.preventDefault()

    const {target} = event

    const data = {
      title: target.title.value,
      text: target.text.value,
    }

    dispatch(editNews(data))
    navigate(-1)
  }




  return (
    <div className="dialog shadow">
      <div className="dialog__bar">Редактирование новости</div>
      <form onSubmit={updateNews} className="form">
        <div className="row">
            <label htmlFor="title" className="label">Пароль</label>
            <input type="title" className="input" name="title" placeholder="Заголовок" defaultValue={title} required />
        </div>
        <div className="row">
            <label htmlFor="text" className="label">Пароль</label>
            <input type="text" className="input" name="text" placeholder="Текст" defaultValue={text} required />
        </div>
        <button type="submit" className="button shadow">Обновить</button>
      </form>
      
    </div>
  );
}

export default NewsParams;
