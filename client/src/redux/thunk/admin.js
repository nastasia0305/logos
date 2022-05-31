export const getLawyers = () => {
  return (dispatch) => {
    fetch('/admin/lawyers')
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_LAWYERS', payload: data }))
      .catch(error => console.error(error))
  }
}


export const validateLawyer = (data) => {
  return (dispatch) => {
    fetch('/admin/lawyers', {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({id: data.id})
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'VALIDATE_LAWYER', payload: data }))
      .catch(error => console.error(error))
  }
}