import React from 'react';
import { useSelector } from 'react-redux';

function ChatList({ data }) {

  return (
    <>
    <div>
    <div className="orderCard">
        <p style={{ marginTop: '10px', textAlign: 'center' }}> <strong>Имя юриста:</strong> {data.lawyerName}</p>
        <p><strong>Статус :</strong> {data.statusClient}</p>
        <p><strong>Характер дела : </strong> {data.case}</p>
        <p><strong>Предполагаемая услуга : </strong> {data.service}</p>
        <div className="card-btn">
          <button className='button shadow card__btn-accept' >Открыть</button>
        </div>
      </div>
    </div>
 
    </>
  );
}

export default ChatList;