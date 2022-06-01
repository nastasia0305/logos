const initialState = { chats: [] };

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CHATS": {
      return { ...state, chats: action.payload };
    }

    default: {
      return state;
    }
  }
};
