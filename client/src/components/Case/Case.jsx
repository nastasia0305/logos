import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CaseCheckbox from '../CaseCheckbox/CaseCheckbox';
import CaseUsluga from '../CaseUsluga/CaseUsluga';

const caseData = [
  'Уголовное',
  'Арбитражное',
  'Налоговое',
  'Бюджетное',
  'Семейное',
  'Жилищное',
  'Трудовое',
  'Договорное',
  'Защита прав потребителя',
  'Земельное',
  'Экологическое',
  'Административное',
  'Гос.закупки',
  'Банкротство',
  'Бухгалтерия'
]
const name = {
  case: "case"
}


function Case(props) {
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const { anketa } = useSelector(state => state.anketa)
  console.log("🚀 ~ AnketaStatus ~ anketa", anketa)
  const getStatusForm = (event) => {
    event.preventDefault()
    const data = {
      cases: event.target.case.value
    }
    console.log("🚀 ~ getStatusForm ~ data", data)
    dispatch({ type: "ADD_ANKETA", payload: data })
    setState('next')
  }
  return (
    <>
      {state === 'next'
        ? <CaseUsluga />
        :
        <form onSubmit={getStatusForm}>
          <div className='kindOfHelp'>
            <h4>Характер дела :</h4> <br />
            <div className="supWrap">
              {caseData.map((elem, idx) => <CaseCheckbox key={elem} value={elem} idx={idx + 7} name={name} />)}
            </div>
            <button type='submit' className='button shadow'>OK</button>  <br />
          </div>
        </form>
      }
    </>
  );
}

export default Case;
