export const getAllRequest = () => {
  return (dispatch) => {
    fetch('/request')
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_ALL_REQUEST', payload: data }))
      .catch(error => console.error(error))
  }
}
