import React from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/thunk/admin";

function AdminOrderCard({ data }) {
  const dispatch = useDispatch();

  const delOrder = (event) => {
    event.preventDefault();
       dispatch(deleteOrder(data.id));
  };

  return (
    <>
      <div className="orderCard">
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          {" "}
          Имя клиента: {data.clientName}{" "}
        </p>
        <p> Статус клиента: {data.statusClient} </p>
        <p> Характер дела: {data.case} </p>
        <p> Предпологаемая услуга: {data.service} </p>
        <p> Вид помощи: {data.help} </p>
        <div className="card-btn">
          <button className='button shadow card__btn-decline' onClick={delOrder}>Удалить</button>
        </div>
      </div>
    </>
  );
}

export default AdminOrderCard;
