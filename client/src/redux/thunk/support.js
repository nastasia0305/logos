export const addSupport = (data) => {
  return (dispatch) => {
    fetch('/add/support', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_SUPPORT', payload: data }))
      .catch(error => console.error(error))
  }
}

export const getRequests = () => {
  return (dispatch) => {
    fetch('/add/supports')
    .then(response => response.json())
    .then(data => dispatch({ type: 'GET_ALL_SUPPORTS', payload: data }))
    .catch(error => console.error(error))
  }
}

export const cnahgeSupportStatus = (data) => {
  return (dispatch) => {
    fetch(`/add/changestatus/${data.id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    } )
    .then(response => response.json())
    .then(data => dispatch({ type: 'CHANGE_STATUS', payload: data }))
    .catch(error => console.error(error))
  }
}

export const deleteSupport = (data) => {
  return (dispatch) => {
    fetch(`/add/deletesupport/${data.id}`,{
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => dispatch({ type: 'DELETE_SUPPORT', payload: data }))
    .catch(error => console.error(error))
  }
}
