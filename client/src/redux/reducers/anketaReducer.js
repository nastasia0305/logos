const initialState = { anketa: {} }

export const anketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANKETA": {
      console.log(action.payload, '>>>>>>')
      return {
        ...state, anketa: { ...state.anketa, ...action.payload }
      }
    }


    default: {
      return state
    }
  }
}
