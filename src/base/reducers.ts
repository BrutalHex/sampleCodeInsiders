import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import TeeterTotterPageReducer from '../Pages/Play/TeeterTotterPageReducer';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  teeterTotter: TeeterTotterPageReducer,
  router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
