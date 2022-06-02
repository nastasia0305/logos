const initialState = { anketa: {}, allRequest: [] }

export const anketaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANKETA": {
      return {
        ...state, anketa: { ...state.anketa, ...action.payload }
      }
    }

    case "GET_ALL_REQUEST": {

      return { ...state, allRequest: action.payload }
    }
    // case "GET_ALL_OWN_REQUEST": {

    //   return { ...state, allRequest: [...state.allRequest, action.payload] }
    // }
    case "REQUEST_ACCEPT": {
      // const newArr = state.allRequest.map(elem => elem.map(el => console.log(el, '>>>>>>')))
      // console.log("🚀 ~ anketaReducer ~ newArr", newArr)
      return { ...state, allRequest: state.allRequest.map(el => el.filter(elem => elem.id !== action.payload)) }
    }
    default: {
      return state
    }
  }
}
