import React, {useState} from 'react';
import Greeting from '../Greeting/Greeting';

function Profile() {

const [state, setState] = useState(1)
  
  return (
    <div>
      <div>
        <button onClick={() => setState(2)}>Мои чаты</button>
        <button onClick={() => setState(3)}>Служба поддержки</button>
        <button onClick={() => setState(4)}>Запросить юриста</button>
      </div>
      <div>
      <Greeting />
      {/* {
        (state === 1) ? <Greeting/> :
        (state === 2) ? <Chats /> :
        (state === 3) ? <Support /> :
        (state === 4) ? <Request /> :
        <Greeting />
      } */}
      </div>
    </div>
  );
}

export default Profile;
