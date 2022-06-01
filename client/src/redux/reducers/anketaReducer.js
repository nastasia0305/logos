const initialState = { anketa: {}, allRequest: [] }

export const anketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANKETA": {
      console.log(action.payload, '>>>>>>')
      return {
        ...state, anketa: { ...state.anketa, ...action.payload }
      }
    }

    case "GET_ALL_REQUEST": {
      // return { ...state, allRequest: [...allRequest, action.payload] }
    }
    default: {
      return state
    }
  }
}
