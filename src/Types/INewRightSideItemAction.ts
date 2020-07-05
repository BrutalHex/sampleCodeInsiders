import RightSideItem from '../components/GameObjects/RightSideItem';
import { New_Right_Side_Shape } from './ActionTypes';
import { IGeneralAction } from './IGeneralAction';
export interface INewRightSideItemAction
  extends IGeneralAction<typeof New_Right_Side_Shape, RightSideItem> {}
