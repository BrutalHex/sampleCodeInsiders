import Handle from '../components/GameObjects/Handle';
import { Game_Over } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
export interface IGameOverAction extends IGeneralAction<typeof Game_Over, boolean> {
}
