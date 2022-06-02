export const getAllRequest = (id) => {
  return (dispatch) => {
    fetch(`/request/${id}`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_ALL_REQUEST', payload: data }))
      .catch(error => console.error(error))
  }
}
// export const getOwnLawyerRequest = (id) => {

//   return (dispatch) => {
//     fetch(`/lawyer/request/own`)
//       .then(response => response.json())
//       .then(data => dispatch({ type: 'GET_ALL_OWN_REQUEST', payload: data }))
//       .catch(error => console.error(error))
//   }
// }
