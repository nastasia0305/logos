import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showDocs } from '../../redux/thunk/admin';

function ShowDocuments({ data }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { docs } = useSelector( store => store.admin )
  const { id } = useParams()

  useEffect(() => {
dispatch(showDocs(id))
  }, [dispatch])


  return (
    <div>
      <button onClick={() => navigate('/admin')}>Назад</button>
      <div> { docs?.firstname }</div>
   <label>Сертификат: </label>
   <div><img style={{width: '500px', height: '300px'}} src={docs.certificate}></img></div>
   <label>Диплом: </label>
   <div><img style={{width: '500px', height: '300px'}} src={docs.diploma}></img></div>
   <label>Трудовая книжка: </label>
   <div><img style={{width: '500px', height: '300px'}} src={docs.employeBook}></img></div>
   
    </div>
  );
}

export default ShowDocuments;