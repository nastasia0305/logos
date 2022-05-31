import Case from '../Case/Case';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function KindOfHelp(props) {
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const { anketa } = useSelector(state => state.anketa)

  const getStatusForm = (event) => {
    event.preventDefault()
    const data = {
      help: event.target.radio6.value
    }
    dispatch({ type: "ADD_ANKETA", payload: data })
    setState('next')
  }
  return (

    <>
      {state === 'next' ? <Case />
        :
        <form onSubmit={getStatusForm}>
          <div className='kindOfHelp'>
            <h4>Вид помощи :</h4> <br />
            <div className="field-row">
              <input className='cb pristine' id="radio6" type="radio" name="kindOfHelp" value='Разовый' />
              <label htmlFor="radio6"> Разовый</label>
            </div>
            <div className="field-row">
              <input className='cb pristine' id="radio6" type="radio" name="kindOfHelp" value=' Регулярное сотрудничество' />
              <label htmlFor="radio6"> Регулярное сотрудничество</label>
            </div>
            <button type='submit' className='button shadow'>OK</button>
          </div>
        </form>

      }
    </>
  );
}

export default KindOfHelp;
