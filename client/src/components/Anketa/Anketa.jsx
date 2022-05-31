import React, { useState } from 'react';
import AnketaStatus from '../AnketaStatus/AnketaStatus';

function Anketa(props) {
  const [value, setValue] = useState('')

  return (
    <div className="window" >
      <div className="title-bar">
        <div className="title-bar-text">Заполните анкету</div>
        <div className="title-bar-controls">
        </div>
      </div>
      <div className="window-body">
        <p>Если у вас нет информации об особенностях вашей ситуации, система сама подберет Вам юриста по запросу общего характера. Можете ли Вы охарактеризовать свою проблему?</p>

        <input className='cb pristine' id="radio10" type="checkbox" name="fieldset-example"
          onChange={() => setValue('yes')}
        />
        <label htmlFor="radio10">  Да, могу попробовать</label>
      </div>

      <input id="radio11" type="radio" name="fieldset-example" className='cb pristine'
        onChange={() => setValue('no')}
      />
      <label htmlFor="radio11">  Нет, затрудняюсь</label>

      {value === 'yes' ? <AnketaStatus /> : ''}
      {value === 'no' ? <button className='button shadow'>Запросить юриста</button> : ''}
    </div >

  );
}

export default Anketa;
