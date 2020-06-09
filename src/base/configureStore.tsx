import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import {logger,timeoutScheduler,InjectWeight} from './middlewares'

import rootReducer from './reducers'

export const history = createBrowserHistory()





export default function configureStore(preloadedState) {
  
    const definedMiddlewares = [  routerMiddleware(history),timeoutScheduler, thunkMiddleware];

  const middlewareEnhancer = ( applyMiddleware(...definedMiddlewares));
 
 
  const store = createStore(rootReducer(history),  middlewareEnhancer);
  return store
}