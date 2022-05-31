const initialState = { chat: {} };

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MESSAGES": {
      return { ...state, chat: action.payload };
    }

    default: {
      return state;
    }
  }
};
