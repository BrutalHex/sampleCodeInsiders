import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import { History } from 'history';
import {logger,timeoutScheduler} from './middlewares'

import rootReducer, {history} from './reducers'







export default function configureStore(preloadedState:any) {
  
    const definedMiddlewares = [  routerMiddleware(history),timeoutScheduler, thunkMiddleware];

  const middlewareEnhancer = ( applyMiddleware(...definedMiddlewares));
 
 
  const store = createStore(rootReducer,  middlewareEnhancer);
  return store
}