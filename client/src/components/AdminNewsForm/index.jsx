import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createNews, removeNews, updateNews } from '../../redux/thunk/admin';

function Form({ method, data = {} }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const update = event => {
    event.preventDefault()

    const { target } = event

    dispatch(updateNews({
      id: data.id,
      title: target.title.value,
      text: target.text.value,
    }))
    navigate(-1)
  }
  const create = event => {
    event.preventDefault()

    const { target } = event

    dispatch(createNews({
      title: target.title.value,
      text: target.text.value,
    }))
    navigate(-1)
  }

  const remove = event => {
    event.preventDefault()

    dispatch(removeNews({ id: data.id }))
    navigate(-1)
  }

  const renderRemoveButton = () => {
    if (method === 'update') {
      return <button type="button" className="button shadow" onClick={remove}>Удалить</button>
    }
  }

  return (
    <form onSubmit={method === 'update' ? update : create} className="form">
      <div className="row">
          <label htmlFor="title" className="label">Заголовок</label>
          <input type="title" className="input" name="title" placeholder="Заголовок" defaultValue={data.title} required />
      </div>
      <div className="row">
          <label htmlFor="text" className="label">Текст</label>
          <textarea className="input textarea" name="text" placeholder="Текст" defaultValue={data.text} required />
      </div>
      <div className="row row--right">
        {renderRemoveButton()}
        <button type="submit" className="button shadow">{method === 'update' ? 'Обновить' : 'Создать'}</button>
      </div>
    </form>
  )
}

export default Form