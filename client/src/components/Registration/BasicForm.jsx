import { useSelector } from 'react-redux'

function BasicForm() {
  const { session } = useSelector(store => store.session)
  const { firstname, lastname, fathersname, email, city } = session

  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Омск', 'Самара', 'Ростов-на-Дону', 'Уфа']

  // TODO: Перенести это в redux
  // const getCities = () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  //       'X-RapidAPI-Key': 'dec4b51b8emshafcc9f42e3d9f0ap1dc3ecjsn308dad847c27'
  //     }
  //   }
    
  //   return fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=500000&countryIds=ru&sort=-population&limit=10&languageCode=ru', options)
  //   .then(response => response.json())
  //   .then(({data}) => data.map(({city}) => city))
  //   .catch(error => console.error(error))
  // }

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
        <select name="select" defaultValue={cities[0]} className="select">
          {
            cities.map((city, index) => {
              return <option value={city} key={'city-' + index}>{city}</option>
            })
          }
        </select>
      </div>
    </>
  )
}

export default BasicForm