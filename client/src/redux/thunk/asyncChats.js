const headers = { "content-type": "application/json" };

export const getMessages = () => {
  return (dispatch) => {
    fetch("/chats")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_MESSAGES", payload: data });
      })
      .catch((error) => console.log(error));
  };
};
