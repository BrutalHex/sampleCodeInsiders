import { connect ,ConnectedProps } from 'react-redux'

import TeeterTotterPage from './TeeterTotterPage'
 import {InitializeGame,RequestleftSideFloatingShape,NewGameTime,DisableMove,ResetGame,NewGameTimerHandle, NewRightSideItem} from './TeeterTotterPageAction'

import RightSideItem from '../../components/GameObjects/RightSideItem'
import { TeeterTotterThunkDispatch } from '../../base/BaseTypes';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import { RootState } from '../../base/reducers';
 
const mapStateToProps = (state:RootState ) => {
  
 debugger;
var obj= {

   ...state.teeterTotter
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
      dispatch(InitializeGame(true));
      dispatch(NewRightSideItem(new RightSideItem()));
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