import { combineReducers } from 'redux'

import { sessionsReducer } from './sessionReducer'
import { supportReducer } from './supportReducer'

import { anketaReducer } from './anketaReducer'

import { chatReducer } from './chatReducer'

import { adminReducer } from './adminReducer'

export const rootReducer = combineReducers({
  session: sessionsReducer,
  support: supportReducer,
  request: anketaReducer,
  anketa: anketaReducer,
  chats: chatReducer,
  admin: adminReducer
})
