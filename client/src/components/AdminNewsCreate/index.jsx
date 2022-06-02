import React from 'react';

import AdminNewsForm from '../AdminNewsForm'

function AdminNewsCreate() {
  return (
    <div className="dialog shadow">
      <div className="dialog__bar">Создание новости</div>
      <AdminNewsForm method="create" />
    </div>
  );
}

export default AdminNewsCreate;
