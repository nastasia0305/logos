import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLawyerId } from '../../redux/thunk/anketa';

function OrderCard({ data }) {
  const dispatch = useDispatch()
  const { id } = useSelector(state => state.session.session)

  const fetchDecline = () => {
    dispatch(addLawyerId(data.id))
  }
  return (
    <>
      <div className="orderCard">
        <p style={{ marginTop: '10px', textAlign: 'center' }}> <strong>Имя : </strong> {data.clientName}</p>
        <p><strong>Статус :</strong> {data.statusClient}</p>
        <p><strong>Характер дела : </strong> {data.case}</p>
        <p><strong>Предполагаемая услуга : </strong> {data.service}</p>
        <p><strong>Вид помощи : </strong> {data.help}</p>
        <div className="card-btn">
          <button className='button shadow card__btn-accept' >Принять</button>
          <button className='button shadow card__btn-decline' onClick={fetchDecline}>Отклонить</button>
        </div>
      </div>
    </>

  );
}

export default OrderCard;
