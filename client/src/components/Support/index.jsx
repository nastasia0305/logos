import React from 'react';

function Support(props) {
  return (
    <>
      <p>Здесь вы можете задать интересующие Вас вопросы администрации Logos.Также вы можете заказать звонок сотрудника платформы для получения устной консультации об использовании Logos и возможности партнерства.<br /><br />
        Задать письменный вопрос :
      </p>
      <div className="forma">
        <div className="form-at">
          <div className="validate-input-at" data-validate="Обязательное поле">
            <textarea className="input-at" name="messageToSupport" placeholder="Ваше сообщение"></textarea>
            <span className="focus-input-at"></span>
          </div>
          <div>Заказать бесплатный звонок сотрудника Logos. Укажите краткую информация о вашем вопросе :</div>
          <div className="validate-input-at w-50" data-validate="Обязательное поле">
            <input className="input-at" type="text" name="supportCall" placeholder="Ваш вопрос" />
            <span className="focus-input-at"></span>
          </div>

          {/* <input type="hidden" name="subject-at" value="Тема формы" /> */}
          <button id="submit-at">Отправить</button>
        </div>
        <div className="result-at"></div>
      </div>
    </>
  );
}

export default Support;
