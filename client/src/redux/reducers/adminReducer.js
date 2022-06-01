const initialState = { lawyers: [], news: [] }

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LAWYERS': {
      return { ...state, lawyers: action.payload }
    }

    case 'VALIDATE_LAWYER': {
      return { ...state, lawyers: action.payload }
    }

    case 'GET NEWS': {
      return { ...state, news: action.payload }
    }

    default: {
      return state
    }
  }
}
