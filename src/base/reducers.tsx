import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import TeeterTotterPageReducer from  '../Pages/Play/TeeterTotterPageReducer'
 



const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
   
    teeterTotter:TeeterTotterPageReducer,
  
  })
  export default rootReducer