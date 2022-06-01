import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../redux/thunk/admin';

function AdminOrderCard({ data }) {
const dispatch = useDispatch()

const delOrder = (event) => {
  event.preventDefault()
  console.log(data);
  dispatch(deleteOrder(data.id))
}

  return (
    <>
    <div className='orderCard'>
<p> Имя клиента: {data.clientName} </p>
<p> Статус клиента: {data.statusClient} </p>
<p> Характер дела: {data.case} </p>
<p> Предпологаемая услуга: {data.service} </p>
<p> Вид помощи: {data.help} </p>
<button onClick={delOrder} >Удалить</button>
    </div>
    </>
  );
}

export default AdminOrderCard;