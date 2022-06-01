export const getNews = () => {
  return (dispatch) => {
    fetch('/news')
      .then(response => response.json())
      .then(data => dispatch({ type: 'GET_NEWS', payload: data }))
      .catch(error => console.error(error))
  }
}
