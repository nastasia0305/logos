import { combineReducers } from 'redux'

import { sessionsReducer } from './sessionReducer'
import { supportReducer } from './supportReducer'
import { anketaReducer } from './anketaReducer'

export const rootReducer = combineReducers({
  session: sessionsReducer,
  support: supportReducer,
  anketa: anketaReducer,
})
