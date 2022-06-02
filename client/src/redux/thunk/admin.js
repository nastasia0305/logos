const headers = { 'content-type': 'application/json' }

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
      headers,
      body: JSON.stringify({ id: data.id })
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'VALIDATE_LAWYER', payload: data }))
      .catch(error => console.error(error))
  }
}

export const getNews = () => {
  return (dispatch) => {
    fetch('/admin/news')
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}

export const updateNews = (data) => {
  return (dispatch) => {
    fetch('/admin/news', {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'UPDATE_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}
export const createNews = (data) => {
  return (dispatch) => {
    fetch('/admin/news', {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'CREATE_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}
export const activateNews = (data) => {
  return (dispatch) => {
    fetch('/admin/news/activation', {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'ACTIVATE_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}

export const removeNews = (data) => {
  return (dispatch) => {
    fetch('/admin/news', {
      method: 'DELETE',
      headers,
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'REMOVE_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}
