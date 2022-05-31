import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Greeting() {
  const navigation = useNavigate()

  const { session } = useSelector(store => store.session)
  const { isValidate } = session


  // const renderLawyerButton = () => {
  //   // if (isLawyer) {
  //     /// return <button onClick={()=> navigation('/confirmEducation')} className="button shadow">Подтвердить образование</button>
  //   }
  // }

 
  const renderLawyerButton = () => {
    if (isValidate ===  false) {
      return <button onClick={()=> navigation('/confirmEducation')} className="button shadow">Подтвердить образование</button>
    }
  }

  
  const renderButtons = () => {
    return <div className="row row--right">
      <button onClick={()=> navigation('/updateProfile')} className="button shadow">Изменить профиль</button>
      {renderLawyerButton()}
    </div>
  }

  return (
    <div>
      <h2 className="row row--center">Уважаемый(-ая) {session.firstname} {session.fathersname ? session.fathersname : ''}!</h2>

      <br />
      <p>Здесь Вы можете найти юриста и работать с ним в режиме реального времени.</p>
      <p>Logos дает возможность найти юриста для любых целей и задач, а также легко и комфортно обмениваться информацией для эффектной работы.</p>
      <br />

      <b className="row row--center">Добро пожаловать!</b>

      {renderButtons()}
    </div>
  )
}

export default Greeting
