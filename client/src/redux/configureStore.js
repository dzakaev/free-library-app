import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import application from './features/application'
import { composeWithDevTools } from 'redux-devtools-extension';
import books from './features/book';

export const store = createStore(
  combineReducers({
    application, books
  }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)