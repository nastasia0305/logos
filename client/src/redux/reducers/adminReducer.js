const initialState = { lawyers: [], news: [], orders: [] }

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

    case 'GET_ALL_ORDERS':{
      return { ...state, orders: action.payload }
    }
    
    case 'DELETE_ORDER': {
      return { ...state, orders: state.orders.filter(el => el.id != action.payload)}
    }

    default: {
      return state
    }
  }
}
