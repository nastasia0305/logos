
export const registerUser = (data) => {
return (dispatch) => {
  fetch('/registration', {
    headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(data)
  })
  .then(res => res.json())
}
}

export const loginUser = (data) => {
  return (dispatch) => {
    fetch('/login', {
      headers: {"content-type": "application/json"},
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
  }