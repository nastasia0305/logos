import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLawyerIdAccept, addLawyerIdDecline, updateRequest } from '../../redux/thunk/anketa';

function OrderCard({ data }) {
  console.log("🚀 ~ OrderCard ~ data", data)
  const dispatch = useDispatch()

  const { id } = useSelector(state => state.session.session)
  const { anketa } = useSelector(state => state.anketa)
  const param = { lawyer_id: id, id: data.id }

  const fetchDecline = () => {
    dispatch(addLawyerIdDecline(param))
    dispatch({ type: "REQUEST_ACCEPT", payload: data.id })

  }
  const fetchAccept = () => {
    dispatch(addLawyerIdAccept(param))
    dispatch(updateRequest(param))
    dispatch({ type: "REQUEST_ACCEPT", payload: data.id })
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
          <button className='button shadow card__btn-accept' onClick={fetchAccept}>Принять</button>
          <button className='button shadow card__btn-decline' onClick={fetchDecline}>Отклонить</button>
        </div>
      </div>
    </>

  );
}

export default OrderCard;
