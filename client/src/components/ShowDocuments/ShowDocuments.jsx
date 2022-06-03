import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showDocs } from '../../redux/thunk/admin';

function ShowDocuments({ data }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { docs } = useSelector(store => store.admin)
  const { id } = useParams()

  useEffect(() => {
    dispatch(showDocs(id))
  }, [dispatch])


  return (
    <div>
      <div className="docWrapper">
        <div className="doc__element">
          <p className='doc__p'>Сертификат: </p>
          <div><img style={{ width: '500px', height: '300px' }} src={docs.certificate}></img></div>
        </div>
        <div className="doc__element">
          <p className='doc__p'>Диплом: </p>
          <div><img style={{ width: '500px', height: '300px' }} src={docs.diploma}></img></div>
        </div>
        <div className="doc__element">
          <p className='doc__p'>Трудовая книжка: </p>
          <div><img style={{ width: '500px', height: '300px' }} src={docs.employeBook}></img></div>
        </div>
      </div>
      <button className='button btn-doc' onClick={() => navigate('/admin')}>Назад</button>
    </div >

  );
}

export default ShowDocuments;
