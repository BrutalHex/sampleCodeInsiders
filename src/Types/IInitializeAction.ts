import RightSideItem from '../components/GameObjects/RightSideItem';
import { Initialize_APP } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
export interface IInitializeAction extends IGeneralAction<typeof Initialize_APP, RightSideItem> {
}
