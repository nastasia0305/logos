import { combineReducers } from 'redux'

import { sessionsReducer } from './sessionReducer'

export const rootReducer = combineReducers({
  session: sessionsReducer,
})
