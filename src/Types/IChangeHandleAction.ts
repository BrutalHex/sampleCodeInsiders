import { IGeneralAction } from './IGeneralAction';
import { Change_Handle } from './ActionTypes';
import Handle from '../components/GameObjects/Handle';

export interface IChangeHandleAction extends IGeneralAction<typeof Change_Handle, Handle> {}
