const initialState = { anketa: {}, allRequest: [] }

export const anketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANKETA": {
      return {
        ...state, anketa: { ...state.anketa, ...action.payload }
      }
    }

    case "GET_ALL_REQUEST": {
      return { ...state, allRequest: [...state.allRequest, action.payload] }
    }
    default: {
      return state
    }
  }
}
