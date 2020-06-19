import NewLeftSideShapeDto from './NewLeftSideShapeDto';
import { New_Left_Side_Shape } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
export interface INewLeftSideShapeAction extends IGeneralAction<typeof New_Left_Side_Shape, NewLeftSideShapeDto> {
}
