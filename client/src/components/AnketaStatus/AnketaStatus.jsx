import React, { useEffect, useState } from 'react';
import KindOfHelp from '../KindOfHelp/KindOfHelp';
import { useDispatch, useSelector } from 'react-redux'
import { addAnketa } from '../../redux/thunk/anketa';

function AnketaStatus(props) {
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const { anketa } = useSelector(state => state.anketa)

  const getStatusForm = (event) => {
    event.preventDefault()
    const data = {
      statusClient: event.target.radio5.value
    }
    dispatch({ type: "ADD_ANKETA", payload: data })
    setState('next')
  }

  return (
    <>

      {state === 'next'
        ? <KindOfHelp />
        :
        <form onSubmit={getStatusForm} >
          <div>
            <div className="supAnswer">
              <h4>Статус</h4> <br />
              <div className="supAnswerInp">
                <div className="field-row">
                  <input className='cb pristine' id="radio5" type="radio" name="first-example" value='Гражданин' />
                  <label htmlFor="radio5"> Гражданин</label>
                </div>
              </div>
              <div className="supAnswerInp">
                <div className="field-row">
                  <input className='cb pristine' id="radio5" type="radio" name="first-example" value='Гражданин иностранного государства' />
                  <label htmlFor="radio5"> Гражданин иностранного государства</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input className='cb pristine' id="radio5" type="radio" name="first-example" value='Лицо без гражданства' />
                  <label htmlFor="radio5"> Лицо без гражданства</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input className='cb pristine' id="radio5" type="radio" name="first-example" value='ИП' />
                  <label htmlFor="radio5"> ИП</label>
                </div>
              </div>

              <div className="supAnswerInp">
                <div className="field-row">
                  <input className='cb pristine' id="radio5" type="radio" name="first-example" value='ЮЛ' />
                  <label htmlFor="radio5"> ЮЛ</label>
                </div>
              </div>
              <button type='submit' className='button btn-anketa' >OK</button>
            </div>
          </div>
        </form>
      }
    </>



  );
}

export default AnketaStatus;
