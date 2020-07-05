import { Game_Timer_Handle } from './ActionTypes';
import { IGeneralAction } from './IGeneralAction';
export interface IGameTimerHandleAction extends IGeneralAction<typeof Game_Timer_Handle, number> {}
