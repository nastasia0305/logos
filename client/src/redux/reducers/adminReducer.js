const initialState = { lawyers: [], news: [], orders: [] }

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LAWYERS': {
      return { ...state, lawyers: action.payload }
    }

    case 'VALIDATE_LAWYER': {
      return { ...state, lawyers: action.payload }
    }

    case 'GET_NEWS': {
      return { ...state, news: action.payload }
    }

    case 'UPDATE_NEWS': {
      const news = state.news.map(item => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title
          item.text = action.payload.text
          item.isActive = action.payload.isActive
        }

        return item
      })

      return { ...state, news }
    }

    case 'ACTIVATE_NEWS': {
      const news = state.news.map(item => {
        if (item.id === action.payload.id) {
          item.isActive = action.payload.isActive
        }

        return item
      })
      
      return { ...state, news }
    }

    case 'REMOVE_NEWS': {
      return { ...state, news: state.news.filter(el => el.id !== action.payload)}
    }

    case 'CREATE_NEWS': {
      return {...state, news:[...state.news, action.payload] }
    }

    case 'GET_ALL_ORDERS': {
      return { ...state, orders: action.payload }
    }
    
    case 'DELETE_ORDER': {
      return { ...state, orders: state.orders.filter(el => el.id !== action.payload)}
    }

    default: {
      return state
    }
  }
}
