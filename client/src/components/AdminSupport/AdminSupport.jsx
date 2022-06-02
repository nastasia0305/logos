import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequests } from '../../redux/thunk/support';
import AdminSupportList from '../AdminSupportList/AdminSupportList';

function AdminSupport(props) {
  const dispatch = useDispatch()
  const { allrequests } = useSelector(state => state.support)
  
  
  useEffect(() => {
    dispatch(getRequests())
  }, [dispatch])

  return (
    <div>
    {allrequests?.map(el => <AdminSupportList key={el.id} data={el} />)}
    </div>
  );
}

export default AdminSupport;