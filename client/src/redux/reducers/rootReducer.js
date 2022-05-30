import { combineReducers } from 'redux'

import { sessionsReducer } from './sessionReducer'
import { supportReducer } from './supportReducer'
import { chatReducer } from './chatReducer'

export const rootReducer = combineReducers({
  session: sessionsReducer,
  support: supportReducer,
  chat: chatReducer,
})
