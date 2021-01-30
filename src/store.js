import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducers'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
  key: 'account',
  storage: storageSession,
  whitelist: ['account']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const newStore = () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  const persistor = persistStore(store)
  return { store, persistor }
}

export default newStore
