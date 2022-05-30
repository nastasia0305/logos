import React, { useState } from 'react';
import KindOfHelp from '../KindOfHelp/KindOfHelp';

function AnketaStatus(props) {
  const [state, setState] = useState('')
  return (
    <>
      <div className="supAnswer">
        <div className="supAnswerInp">
          <div class="field-row">
            <input id="radio5" type="radio" name="first-example" />
            <label htmlFor="radio5">Разовый</label>
          </div>
        </div>
        <div className="supAnswerInp">
          <div class="field-row">
            <input id="radio5" type="radio" name="first-example" />
            <label htmlFor="radio5">Регулярное
              сотрудничество</label>
          </div>
        </div>
        <div className="supAnswerInp">
          <input className='allInp' type="checkbox" id="example3" />
          <label for="example3">Лицо без гражданства</label>
        </div>
        <div className="supAnswerInp">
          <input className='allInp' type="checkbox" id="example4" />
          <label for="example4">ИП</label>
        </div>
        <div className="supAnswerInp">
          <input className='allInp' type="checkbox" id="example5" />
          <label for="example5">ЮЛ</label>
        </div>
      </div>
      <button onClick={() => setState('next')}>OK</button>
      {state === 'next' ? <KindOfHelp /> : ''}

    </>
  );
}

export default AnketaStatus;
