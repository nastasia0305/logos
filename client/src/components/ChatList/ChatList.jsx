import React from 'react';
import { useSelector } from 'react-redux';

function ChatList({ data }) {

  return (
    <>
      <div className="card">
        <div className="card__text">
          <p style={{ marginTop: '10px', textAlign: 'center' }}> <strong>Имя юриста: </strong> {data.lawyerName}</p>
          <p><strong>Статус :</strong> {data.statusClient}</p>
          <p><strong>Характер дела : </strong> {data.case}</p>
          <p><strong>Предполагаемая услуга : </strong> {data.service}</p>
          <div className="card-btn">
            <button className='button btn-chat' >Открыть</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatList;
