import React from 'react';
import { useDispatch } from 'react-redux';
import { cnahgeSupportStatus, deleteSupport } from '../../redux/thunk/support';

function AdminSupportList({ data }) {
  const dispatch = useDispatch()

  const changeStatus = (e) => {
    e.preventDefault()
    dispatch(cnahgeSupportStatus(data))
  }

  const deleteSupports = (e) => {
    e.preventDefault()
    dispatch(deleteSupport(data))
  }

  return (
    <div className='orderCard' style={{ height: 'fit-content' }}>
      <p>Имя пользователя: {data.lawyer_id ? data.lawyer_id : data.client_id} </p>
      <p>Вопрос: {data.question}</p>
      <p>Номер телефона: {data.description}</p>
      <p>Статус: {data.status} </p>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', marginBottom: '10px' }} >
        <button className='button shadow card__btn-decline' style={{ width: 'fit-content', marginRight: '5px', height: 'fit-content' }} onClick={deleteSupports}> Удалить</button>
        <button className='button shadow card__btn-accept' style={{ width: 'fit-content', }} onClick={changeStatus}> Выполнена</button>

      </div>

    </div>
  );
}

export default AdminSupportList;
