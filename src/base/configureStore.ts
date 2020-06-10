import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import {logger,timeoutScheduler} from './middlewares'

import rootReducer from './reducers'

export const history = createBrowserHistory()





export default function configureStore(preloadedState:any) {
  
    const definedMiddlewares = [  routerMiddleware(history),timeoutScheduler, thunkMiddleware];

  const middlewareEnhancer = ( applyMiddleware(...definedMiddlewares));
 
 
  const store = createStore(rootReducer(history),  middlewareEnhancer);
  return store
}