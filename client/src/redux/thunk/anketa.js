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

export const addLawyerIdDecline = (param) => {
  return (dispatch) => {
    fetch(`/decline/lawyer_id/${param.lawyer_id}/${param.id}`, {
      headers: { 'content-type': 'application/json' },
      method: 'PUT',
    })
  }
}
export const updateRequest = (param) => {
  return (dispatch) => {
    fetch(`/update/request/lawyer_id/${param.lawyer_id}/${param.id}`, {
      headers: { 'content-type': 'application/json' },
      method: 'PUT',
    })
  }
}
export const addLawyerIdAccept = (param) => {
  return (dispatch) => {
    fetch(`/decline/lawyer_id/${param.lawyer_id}/${param.id}`, {
      headers: { 'content-type': 'application/json' },
      method: 'GET',
    })
  }
}

