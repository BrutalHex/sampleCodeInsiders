import { Reset_Game } from './ActionTypes';
import { IGeneralAction } from './IGeneralAction';
export interface IResetGameAction extends IGeneralAction<typeof Reset_Game, null> {}
