import { New_Game_Time } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
export interface INewGameTimeAction extends IGeneralAction<typeof New_Game_Time, number> {
}
