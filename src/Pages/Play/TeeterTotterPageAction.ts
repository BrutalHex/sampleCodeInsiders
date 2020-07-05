import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import Mathematics from '../../base/Mathematics';
import {
  creatAction,
  New_Right_Side_Shape,
  New_Left_Side_Shape,
  Initialize_APP,
  ActoinTypes,
  Change_Handle,
  Disable_Move,
  Game_Over,
  Reset_Game,
  Game_Timer_Handle,
  New_Game_Time,
} from '../../Types/ActionTypes';
import DisableMoveDto from '../../components/GameObjects/DisableMoveDto';

import Handle from '../../components/GameObjects/Handle';
import { TeeterTotterThunkDispatch, TeeterTotterThunkResult } from '../../base/BaseTypes';
import RightSideItem from '../../components/GameObjects/RightSideItem';

export const RequestleftSideFloatingShape = (timer: number) => {
  return (dispatch: TeeterTotterThunkDispatch, getState: any) => {
    const state = getState().teeterTotter;

    const obj = new LeftSideItem(timer);
    let totalWeight = 0;
    let leftSideForce = 0;

    const handleEffectiveLen = state.handle.width / 2;

    const itemsOfLeft = state.leftSideShape;

    itemsOfLeft.map((item: LeftSideItem, index: number) => {
      totalWeight = totalWeight + item.weight;
      if (!item.isFloating) {
        leftSideForce = leftSideForce + item.CalculateForce(handleEffectiveLen);
      }
      return item;
    });

    const rightForce = !state.rightSideShape.CalculateForce
      ? 0
      : state.rightSideShape.CalculateForce(handleEffectiveLen);

    let angle = Mathematics.CalculateEquilibreumAngle(rightForce, leftSideForce);

    const forcediff = leftSideForce - rightForce;

    if (totalWeight + obj.weight <= 20 && Math.abs(angle) < 30) {
      dispatch(NewLeftSideShape(obj));

      return dispatch(HandleChanged(forcediff, angle));
    }

    angle = Mathematics.GetMaxAngle(angle, 30);

    clearInterval(state.gameTimerId as number);

    dispatch(HandleChanged(forcediff, angle));

    return dispatch(GameOver());
  };
};

export function InitializeGame(isinit: boolean): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(Initialize_APP, isinit));
}

export function NewRightSideItem(shape: RightSideItem): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) =>
    dispatch(creatAction(New_Right_Side_Shape, shape));
}
export function NewLeftSideShape(shape: LeftSideItem): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(New_Left_Side_Shape, shape));
}

export function HandleChanged(
  forcediff: number,
  angle: number
): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) =>
    dispatch(creatAction(Change_Handle, new Handle(angle, forcediff)));
}

export function DisableMove(
  item: LeftSideItem,
  index: number
): TeeterTotterThunkResult<ActoinTypes> {
  item.isFloating = false;
  return (dispatch: TeeterTotterThunkDispatch) =>
    dispatch(creatAction(Disable_Move, new DisableMoveDto(item, index)));
}

export function GameOver(): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(Game_Over, true));
}

export function ResetGame(): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(Reset_Game, null));
}

export function NewGameTimerHandle(id: number): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(Game_Timer_Handle, id));
}

export function NewGameTime(timer: number): TeeterTotterThunkResult<ActoinTypes> {
  return (dispatch: TeeterTotterThunkDispatch) => dispatch(creatAction(New_Game_Time, timer));
}
