import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnketa } from '../../redux/thunk/anketa';
import AnketaStatus from '../AnketaStatus/AnketaStatus';

function Anketa(props) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { session } = useSelector(state => state.session)
  const { id, firstname, lastname, fathersname } = session

  const sendDefaultAnketa = () => {
    dispatch(addAnketa({ id, firstname, lastname, fathersname }))
  }
  return (
    <div className="window" >
      <div className="title-bar">
        <div className="title-bar-text">Заполните анкету</div>
        <div className="title-bar-controls">
        </div>
      </div>
      <div className="window-body">
        <p>Если у вас нет информации об особенностях вашей ситуации, система сама подберет Вам юриста по запросу общего характера. Можете ли Вы охарактеризовать свою проблему?</p>
        <fieldset style={{ marginTop: "20px" }}>
          <div className="field-row">
            <input className='cb pristine' style={{ marginBottom: '10px' }} id="radio10" type="radio" name="fieldset-example"
              onChange={() => setValue('yes')}
            />
            <label htmlFor="radio10"> Да, могу попробовать</label>
          </div>
          <div className="field-row">
            <input className='cb pristine' id="radio11" type="radio" name="fieldset-example"
              onChange={() => setValue('no')}
            />
            <label htmlFor="radio11"> Нет, затрудняюсь</label>
          </div>
        </fieldset>
        {value === 'yes' ? <AnketaStatus /> : ''}
        {value === 'no' ? <button onClick={sendDefaultAnketa} className='button shadow' style={{ marginTop: "20px" }}>Запросить юриста</button> : ''}
      </div >
    </div >
  );
}

export default Anketa;
