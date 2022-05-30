import React, { useState } from 'react';
import Case from '../Case/Case';

function KindOfHelp(props) {
  const [state, setState] = useState('')

  return (
    <>
      <h4>Вид помощи :</h4>
      <div class="field-row">
        <input id="radio5" type="radio" name="first-example" />
        <label htmlFor="radio5">Разовый</label>
      </div>
      <div class="field-row">
        <input id="radio6" type="radio" name="first-example" />
        <label htmlFor="radio6">Регулярное сотрудничество</label>
      </div>
      <button onClick={() => setState('next')}>OK</button>
      {state === 'next' ? <Case /> : ''}

    </>
  );
}

export default KindOfHelp;
