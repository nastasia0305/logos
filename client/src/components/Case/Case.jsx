import React, { useState } from 'react';
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


function Case(props) {
  const [state, setState] = useState('')

  return (
    <>
      {state === 'next'
        ? <CaseUsluga />
        :
        <form >
          <div className='kindOfHelp'>
            <h4>Характер дела :</h4> <br />
            <div className="supWrap">
              {caseData.map((elem, idx) => <CaseCheckbox key={elem} value={elem} idx={idx + 7} />)}
            </div>
            <button type='submit' className='button shadow' onClick={() => setState('next')}>OK</button>  <br />
          </div>
        </form>
      }
    </>
  );
}

export default Case;
