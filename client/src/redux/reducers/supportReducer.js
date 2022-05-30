const initialState = { support: {} }

export const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUPPORT': {
      return { ...state, support: action.payload }
    }
    default: {
      return state
    }
  }
}
