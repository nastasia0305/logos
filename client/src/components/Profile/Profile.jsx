import React, { useState } from 'react';
import FeedBackForm from '../FeedBack/FeedBackForm';
import Greeting from '../Greeting/Greeting';

function Profile() {

  const [state, setState] = useState(1)
  console.log("🚀 ~ Profile ~ state", state)

  return (
    <div className="container">

      <div className='pfofile'>
        <div className='profile__bar'>
          <button className='profile__btn' onClick={() => setState(2)}>Мои чаты</button>
          <button className='profile__btn' onClick={() => setState(3)}>Служба поддержки</button>
          <button className='profile__btn' onClick={() => setState(4)}>Запросить юриста</button>
        </div>
        <div className='profile__info'>
          {/* <Greeting /> */}
          {
            // (state === 1) ? <Greeting /> :
            (state === 3) ? <FeedBackForm /> :
              // (state === 2) ? <Chats /> :
              // (state === 3) ? <Support /> :
              //   (state === 4) ? <Request /> :
              <Greeting />
          }
        </div>
      </div>
    </div>

  );
}

export default Profile;
