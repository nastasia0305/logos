import React, { useState } from 'react';
import Case from '../Case/Case';

function KindOfHelp(props) {
  const [state, setState] = useState('')

  return (
    <>
      {state === 'next' ? <Case />
        :
        <form>
          <div className='kindOfHelp'>
            <h4>Вид помощи :</h4> <br />
            <div className="field-row">
              <input id="radio5" type="radio" name="first-example" />
              <label htmlFor="radio5"> Разовый</label>
            </div>
            <div className="field-row">
              <input id="radio6" type="radio" name="first-example" />
              <label htmlFor="radio6"> Регулярное сотрудничество</label>
            </div>
            <button type='submit' className='button shadow' onClick={() => setState('next')}>OK</button>
          </div>
        </form>

      }
    </>
  );
}

export default KindOfHelp;
