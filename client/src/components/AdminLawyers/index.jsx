import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLawyers, validateLawyer } from '../../redux/thunk/admin'

function AdminLawyers() {
  const dispatch = useDispatch()

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
        <th>Отчество</th>
        <th></th>
      </tr>
    </thead>
  }

  const renderItem = ({id, firstname, lastname, fathersname}) => {
    return <tr key={'lawyer-' + id}>
      <td className="text--center">{firstname}</td>
      <td className="text--center">{lastname}</td>
      <td className="text--center">{fathersname}</td>
      <td className="text--center">
        <button onClick={() => validate(id)} className="button shadow">Утвердить</button>
      </td>
    </tr>
  }

  const renderList = () => {
    return <tbody>{lawyers.map(lawyer => renderItem(lawyer))}</tbody>
  }

  return (
    <table style={{width: '100%'}}>{renderHeader()}{renderList()}</table>
  )
}

export default AdminLawyers