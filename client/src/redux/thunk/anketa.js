export const addAnketa = (data) => {
  return (dispatch) => {
    fetch('/add/anketa', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: "ADD_ANKETA", payload: data }))
      .catch(error => console.error(error))

  }
}
