import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AdminNewsForm from '../AdminNewsForm'

function AdminNewsUpdate() {
  const { id } = useParams();
  const { news } = useSelector(state => state.admin)

  const foundNews = (news || []).find(item => item.id === +id) || {}

  const data = { id, title: foundNews.title || '', text: foundNews.text || '' }

  return (
    <div className="dialog shadow">
      <div className="dialog__bar">Редактирование новости</div>
      <AdminNewsForm data={ data } method="update" />
    </div>
  );
}

export default AdminNewsUpdate;
