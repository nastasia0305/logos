import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLawyers, validateLawyer } from '../../redux/thunk/admin'
import { useNavigate } from 'react-router-dom'

function AdminLawyers() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { lawyers } = useSelector(state => state.admin)

  const length = lawyers.length
  // console.log(lawyers)
  // console.log(lawyers[0].case.join(', '))
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

  const renderItem = (lawyer) => {
    return <tr key={'lawyer-' + lawyer.id}>
      <td className="text--center">{lawyer.firstname}</td>
      <td className="text--center">{lawyer.lastname}</td>
      <td className="text--center">{lawyer.city}</td>
      {/* <td className="text--center">
        <img src ="{lawyer.certificate}>
        </img>{lawyer.diploma}</td> */}

      <td>
        <button onClick={() => validate(lawyer.id)} className="button shadow">Утвердить</button>
      </td>
    </tr>
  }

  const renderList = () => {
       return <tbody>{lawyers.map(lawyer => renderItem(lawyer))}</tbody>
     }

  return (
    <>
    { length >=1
      ?
      <table className="table">{renderHeader()}{renderList()}</table>
      :
      <h3>Новых данных нет</h3>
    }
    </>
  )
}

export default AdminLawyers
