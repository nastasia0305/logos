import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getLawyers, validateLawyer } from '../../redux/thunk/admin'

function AdminLawyers() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { lawyers } = useSelector(state => state.admin)

  useEffect(() => dispatch(getLawyers()), [ dispatch ])

  const validate = (id) => {
    dispatch(validateLawyer({id}))
    dispatch(getLawyers())
  }

  const renderHeader = () => {
    return <thead>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Город</th>
        <th>Документы</th>
        <th>Согласование</th>
      </tr>
    </thead>
  }


  // const renderCase = (case) => {
  //   if (case.length > 1) {
  //     return <td className="text--center">{case.join(', ')}</td>
  //   } else if (case.length = 1) {
  //     <td className="text--center">{case}</td>
  //   } else {
  //     return ""
  //   }
  // }

  const renderItem = (item) => {
    return <tr key={'lawyer-' + item.id}>
      <td className="text--center">{item.firstname}</td>
      <td className="text--center">{item.lastname}</td>
      <td className="text--center">{item.city}</td>
      <td className="text--center">
        {/* <img src ="{lawyer.certificate}></img>{lawyer.diploma} */}
      </td>
      <td className="text--center">
        <button onClick={() => validate(item.id)} className="button shadow">Утвердить</button>
      </td>
    </tr>
  }

  const renderList = () => {
    return <tbody>{lawyers.map(item => renderItem(item))}</tbody>
  }

  const renderContent = () => {
    if (lawyers.length) {
      return <table className="table">{renderHeader()}{renderList()}</table>
    }

    return <div className="row row--center"><h3>Новых данных нет</h3></div>
  }

  return renderContent()
}

export default AdminLawyers
