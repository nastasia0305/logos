import React, { useState } from 'react';
import KindOfHelp from '../KindOfHelp/KindOfHelp';

function AnketaStatus(props) {
  const [state, setState] = useState('')
  return (
    <>

      {state === 'next'
        ? <KindOfHelp />
        :
        <form >
          <div>
            <div className="supAnswer">
              <h4>Статус</h4> <br />
              <div className="supAnswerInp">
                <div className="field-row">
                  <input id="radio5" type="radio" name="first-example" />
                  <label htmlFor="radio5"> Гражданин</label>
                </div>
              </div>
              <div className="supAnswerInp">
                <div className="field-row">
                  <input id="radio5" type="radio" name="first-example" />
                  <label htmlFor="radio5"> Гражданин иностранного государства</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input id="radio5" type="radio" name="first-example" />
                  <label htmlFor="radio5"> Лицо без гражданства</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input id="radio5" type="radio" name="first-example" />
                  <label htmlFor="radio5"> ИП</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input id="radio5" type="radio" name="first-example" />
                  <label htmlFor="radio5"> ЮЛ</label>
                </div>
              </div>
              <button type='submit' className='button shadow' onClick={() => setState('next')}>OK</button>
            </div>
          </div>
        </form>
      }
    </>



  );
}

export default AnketaStatus;
