import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from '../UpdateProfile/UpdateProfile';
function Greeting(props) {
  const { session } = useSelector(store => store.session)
  const navigation = useNavigate()

  return (
    <div>
      <h2>Уважаемый(-ая) ${session.firstname} {session.fathersname ? `${session.fathersname}` : " "} !</h2> <br />
      <p>Здесь Вы можете найти юриста и работать с ним в режиме реального времени. Logos дает возможность найти юриста для любых целей и задач, а также легко и комфортно обмениваться информацией для эффектной работы.</p> <br />
      <p>Добро пожаловать!</p>


      <button onClick={()=> navigation('/UpdateProfile')}>Изменить профиль</button>
    </div>
  );
}

export default Greeting;
