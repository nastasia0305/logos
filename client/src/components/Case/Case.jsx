import React, { useState } from 'react';
import CaseCheckbox from '../CaseCheckbox/CaseCheckbox';

const caseData = [
  'Уголовное',
  'Арбитражное',
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
      <h4>Характер дела :</h4>
      {caseData.map((elem, idx) => <CaseCheckbox key={idx} value={elem} idx={idx + 7} />)}
      <button onClick={() => setState('next')}>OK</button>
      {/* {state === 'next' ? <KindOfHelp /> : ''} */}

    </>
  );
}

export default Case;
