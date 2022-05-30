const initialState = { session: {} }

export const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_SESSION': {
      return { ...state, session: action.payload }
    }

    case 'CLEAR_SESSION': {
      return initialState
    }


    default: {
      return state
    }
  }
}
