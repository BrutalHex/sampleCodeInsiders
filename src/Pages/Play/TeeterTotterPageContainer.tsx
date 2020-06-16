import { connect } from 'react-redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import TeeterTotterPage from './TeeterTotterPage'
 import {InitializeGame,RequestleftSideFloatingShape,NewGameTime,DisableMove,ResetGame,NewGameTimerHandle} from './TeeterTotterPageAction'

import RightSideItem from '../../components/Objects/RightSideItem'
 
const mapStateToProps = (state, ownProps) => {
  
 
var obj= {

    isInit  :state.teeterTotter.isInit,
    left    :state.teeterTotter.leftSideShape,
    right   :state.teeterTotter.rightSideShape,
    handle:state.teeterTotter.handle,
    gameTime:state.teeterTotter.gameTime,
 
    angle:state.teeterTotter.angle,
    GameOver:state.teeterTotter.GameOver
};
 
return obj;
 
}


const mapDispatchToProps = (dispatch, ownProps) => {



  return {

    DisableMove:(item:any,index:number)=>{
       
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

const TeeterTotterPageContainer =  (connect(
    mapStateToProps,
  mapDispatchToProps
)(TeeterTotterPage))
export default TeeterTotterPageContainer