import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import TeeterTotterPageReducer from  '../Pages/Play/TeeterTotterPageReducer'
 



const rootReducer = (history:any) => combineReducers({
  router: connectRouter(history),
   
    teeterTotter:TeeterTotterPageReducer,
  
  })
  export default rootReducer


  export type RootState = ReturnType<typeof rootReducer>
