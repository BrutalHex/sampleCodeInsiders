import DisableMoveDto from './DisableMoveDto';
import { Disable_Move } from './ActionTypes';
import { IGeneralAction } from "./IGeneralAction";
export interface IDisableMoveAction extends IGeneralAction<typeof Disable_Move, DisableMoveDto> {
}
