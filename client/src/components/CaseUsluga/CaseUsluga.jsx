import React from 'react';
import CaseCheckbox2 from '../CaseCheckbox/CaseCheckbox2';

export default CaseUsluga;
const caseUsluga = [
  'иск',
  'претензия',
  'спор',
  'договор',
  'ходатайство',
  'консультация',
  'жалоба',
  'оформление документов',
  'сопровождение сделки',
  'выход в суд'
]

function CaseUsluga(props) {
  return (
    <>
      <h4>Предполагаемая услуга :</h4> <br />
      <form >
        <div className="kindOfHelp">

          <div className="supWrap">
            {caseUsluga.map((elem, idx) => <CaseCheckbox2 key={elem} value={elem} idx={idx + 23} />)}
          </div>
          <button type='submit' className='button shadow' >OK</button>
        </div>
      </form>

    </>


  );
}
