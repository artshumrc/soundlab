import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { ApolloClient } from 'react-apollo'
import { routerReducer } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import ui from './reducers/ui'
import playlist from './reducers/playlistReducer'

export const client = new ApolloClient()

export const store = createStore(
  combineReducers({
    ui:ui,
    playlist:playlist,
    apollo: client.reducer(),
    routing: routerReducer
  }),
  compose(
    applyMiddleware(client.middleware(), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
