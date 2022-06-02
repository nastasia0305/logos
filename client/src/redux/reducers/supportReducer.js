const initialState = { support: {}, allrequests: [] }

export const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUPPORT': {
      return { ...state, support: action.payload }
    }

    case 'GET_ALL_SUPPORTS': {
      return { ...state, allrequests: action.payload }
    }

    case 'CHANGE_STATUS': {
    console.log(action.payload);
      return { ...state, allrequests: state.allrequests.map((el) => {
        if (el.id === Number(action.payload)) {
          el.status = 'Выполнена'
        }
        return el
      }) }
    }

    case 'DELETE_SUPPORT': {
      return { ...state, allrequests: state.allrequests.filter((el) => el.id !== Number(action.payload) ) }
    }

    default: {
      return state
    }
  }
}
