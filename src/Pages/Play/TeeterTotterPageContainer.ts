import { connect, ConnectedProps } from 'react-redux';

import TeeterTotterPage from './TeeterTotterPage';
import {
  InitializeGame,
  NewGameTime,
  DisableMove,
  ResetGame,
  NewGameTimerHandle,
  NewRightSideItem,
  RequestleftSideFloatingShape,
} from './TeeterTotterPageAction';

import RightSideItem from '../../components/GameObjects/RightSideItem';
import { TeeterTotterThunkDispatch } from '../../base/BaseTypes';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import { RootState } from '../../base/reducers';

const mapStateToProps = (state: RootState) => {
  var obj = {
    ...state.teeterTotter,
  };

  return obj;
};

const mapDispatchToProps = (dispatch: TeeterTotterThunkDispatch) => {
  return {
    DisableMove: (item: LeftSideItem, index: number) => {
      dispatch(DisableMove(item, index));
    },

    InitGame: () => {
      let timer: number = 0;
      dispatch(RequestleftSideFloatingShape(timer));
      const id: any = setInterval(
        () => {
          timer++;
          dispatch(NewGameTime(timer));
          if ((timer * 24) % 300 === 0) {
            dispatch(RequestleftSideFloatingShape(timer));
          }
        },
        700,
        0
      );

      dispatch(NewGameTimerHandle(id as number));

      dispatch(InitializeGame(false));
      dispatch(NewRightSideItem(new RightSideItem()));
    },

    ResetGame: () => {
      dispatch(ResetGame());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface TeeterTotterPageProps extends PropsFromRedux {}

const TeeterTotterPageContainer = connector(TeeterTotterPage);
export default TeeterTotterPageContainer;
