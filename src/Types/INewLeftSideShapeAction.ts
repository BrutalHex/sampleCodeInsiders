
import { New_Left_Side_Shape } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
import LeftSideItem from '../components/GameObjects/LeftSideItem';
export interface INewLeftSideShapeAction extends IGeneralAction<typeof New_Left_Side_Shape,  LeftSideItem> {
}
