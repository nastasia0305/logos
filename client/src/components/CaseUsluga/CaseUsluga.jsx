import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnketa } from '../../redux/thunk/anketa';
import CaseCheckbox2 from '../CaseCheckbox/CaseCheckbox2';

export default CaseUsluga;
const caseUsluga = [
  'Иск',
  'Претензия',
  'Спор',
  'Договор',
  'Ходатайство',
  'Консультация',
  'Жалоба',
  'Оформление документов',
  'Сопровождение сделки',
  'Выход в суд'
]

function CaseUsluga(props) {
  // const [state, setState] = useState('')
  const dispatch = useDispatch()

  const { anketa } = useSelector(state => state.anketa)
  const { session } = useSelector(state => state.session)
  const { id, firstname, lastname, fathersname } = session
  console.log("🚀 ~ CaseUsluga ~ lastname", lastname)
  const getStatusForm = (event) => {
    event.preventDefault()
    const data = {
      ...anketa,
      service: event.target.service.value,
      id: id,
      firstname,
      lastname,
      fathersname
    }
    dispatch(addAnketa(data))

  }
  return (
    <>
      <h4>Предполагаемая услуга :</h4> <br />
      <form onSubmit={getStatusForm}>
        <div className="kindOfHelp">

          <div className="supWrap">
            {caseUsluga.map((elem, idx) => <CaseCheckbox2 key={elem} value={elem} idx={idx + 23} />)}
          </div>
          <button type='submit' className='button shadow'>OK</button>
        </div>
      </form>
    </>
  );
}
