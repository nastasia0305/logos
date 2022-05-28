import { useSelector } from 'react-redux'

function BasicForm() {
  const { session } = useSelector(store => store.session)
  const { firstname, lastname, fathersname, email, city } = session

  return (
    <>
      <div className="row">
        <label htmlFor="email" className="label">E-mail</label>
        <input type="email" className="input" name="email" autoComplete="email" placeholder="E-mail" defaultValue={email} required />
      </div>
      <div className="row">
        <label htmlFor="firstname" className="label">Имя</label>
        <input type="text" className="input" name="firstname" placeholder="Имя" defaultValue={firstname} required />
      </div>
      <div className="row">
        <label htmlFor="lastname" className="label">Фамилия</label>
        <input type="text" className="input" name="lastname" placeholder="Фамилия" defaultValue={lastname} required />
      </div>
      <div className="row">
        <label htmlFor="fathersname" className="label">Отчество</label>
        <input type="text" className="input" name="fathersname" placeholder="Отчество" defaultValue={fathersname} />
      </div>
      <div className="row">
        <label htmlFor="city" className="label">Город</label>
        <input type="text" className="input" name="city" placeholder="Город" defaultValue={city} required />
      </div>
    </>
  )
}

export default BasicForm