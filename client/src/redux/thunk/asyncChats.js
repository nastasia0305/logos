
export const getChats = () => {
  return (dispatch) => {
    fetch('/allchats')
      .then(response => response.json())
      .then(data => dispatch({ type: 'ALL_CHATS', payload: data }))
      .catch(error => console.error(error))
  }
}