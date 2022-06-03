import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSupport } from '../../redux/thunk/support';

function Support(props) {
  const dispatch = useDispatch();
  // const [required, setRequired] = useState('required')
  const { session } = useSelector(store => store.session)
  const { id } = session


  const supportHandler = (event) => {
    event.preventDefault()
    const data = {
      question: event.target.messageToSupport.value,
      description: event.target.supportCall.value,
      id,
    }
    if (data.question || data.description !== '') {
      dispatch(addSupport(data))
    } else alert(`Заполните поля прежде чем отправлять`)
  }
  return (
    <>
      <p className='greeting-p'>Здесь вы можете задать интересующие Вас вопросы администрации Logos.Также вы можете заказать звонок сотрудника платформы для получения устной консультации об использовании Logos и возможности партнерства. <hr /> <br /><br />
        Задать письменный вопрос :
      </p>
      <form onSubmit={supportHandler}>
        <div className="forma">
          <div className="form-at">
            <div className="validate-input-at" data-validate="Обязательное поле">
              <textarea className="input-at" name="messageToSupport" placeholder="Ваше сообщение" ></textarea>
              <span className="focus-input-at"></span>
            </div>
            <p className='greeting-p'>Заказать бесплатный звонок сотрудника Logos. Укажите краткую информация о вашем вопросе :</p>
            <div className="validate-input-at w-50" data-validate="Обязательное поле">
              <input className="input-at" type="text" name="supportCall" placeholder="Ваш вопрос" />
              <span className="focus-input-at"></span>
            </div>
            <button id="submit-at" className='button btn-anketa'>Отправить</button>
          </div>
          <div className="result-at"></div>
        </div>
      </form>

    </>
  );
}

export default Support;
