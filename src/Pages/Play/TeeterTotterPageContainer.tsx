import { connect ,ConnectedProps } from 'react-redux'

import TeeterTotterPage from './TeeterTotterPage'
 import {InitializeGame,RequestleftSideFloatingShape,NewGameTime,DisableMove,ResetGame,NewGameTimerHandle} from './TeeterTotterPageAction'

import RightSideItem from '../../components/GameObjects/RightSideItem'
import { TeeterTotterThunkDispatch } from '../../base/BaseTypes';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import { RootState } from '../../base/reducers';
 
const mapStateToProps = (state:RootState ) => {
  
 
var obj= {

    isInit  :state.teeterTotter.isInit,
    left    :state.teeterTotter.leftSideShape,
    right   :state.teeterTotter.rightSideShape,
    handle:state.teeterTotter.handle,
    gameTime:state.teeterTotter.gameTime,
    angle:state.teeterTotter.angle,
    GameOver:state.teeterTotter.gameOver
};
 
return obj;
 
}


const mapDispatchToProps = (dispatch:TeeterTotterThunkDispatch ) => {



  return {

    DisableMove:(item:LeftSideItem,index:number)=>{
       
         dispatch( DisableMove(item,index));
       
    },

    InitGame:()=>{

    
         let timer:number=0;
         dispatch(RequestleftSideFloatingShape(timer));
         let gameTimerId:number =  setInterval(() => {
        timer++;
          dispatch(NewGameTime(timer));
          if((timer*24)%400==0)
          {
             dispatch(RequestleftSideFloatingShape(timer));
          }
        },undefined, 41);
       dispatch(NewGameTimerHandle(gameTimerId));
      dispatch(InitializeGame(new RightSideItem()));
    },

    ResetGame:()=>{

      dispatch(ResetGame());

    }

 
  }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

type PropsFromRedux = ConnectedProps<typeof connector>

export interface TeeterTotterPageProps extends PropsFromRedux {
 
}


const TeeterTotterPageContainer =  (connector(TeeterTotterPage))
export default TeeterTotterPageContainer