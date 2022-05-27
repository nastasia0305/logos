export const fetchRegisterAC = (payload) => {
  return {
    type: 'REGISTER_USER',
    payload,
  }
}

export const authUsersAC = (payload) => {
  return {
    type: 'CHECK_SESSION',
    payload,
  }
}