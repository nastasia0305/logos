import { authUsersAC } from '../actionCreators/userAC'

export const registerUser = (data) => {
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
};


export const checkAuthFetch = (data) => {
  return (dispatch) => {
    fetch("/getsession")
    .then(res => res.json())
    .then(data => dispatch(authUsersAC(data)))
    .catch(err => console.log(err.message))
  }
}