import { combineReducers } from 'redux'

import { sessionsReducer } from './sessionReducer'
import { supportReducer } from './supportReducer'

export const rootReducer = combineReducers({
  session: sessionsReducer,
  support: supportReducer
})
