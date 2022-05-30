const initialState = { session: {} }

export const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_SESSION': {
      return { ...state, session: action.payload }
    }

    case 'UPDATE_PROFILE': {
      // return { ...state, session: {...session, firstname: action.payload.firstname, lastname: action.payload.lastname, fathersname: action.payload.fathersname, email: action.payload.email, city: action.payload.city}}
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
