import { connect ,ConnectedProps } from 'react-redux'

import TeeterTotterPage from './TeeterTotterPage'
 import {InitializeGame,NewGameTime,DisableMove,ResetGame,NewGameTimerHandle, NewRightSideItem, NewLeftSideShape, HandleChanged, GameOver, RequestleftSideFloatingShape} from './TeeterTotterPageAction'

import RightSideItem from '../../components/GameObjects/RightSideItem'
import { TeeterTotterThunkDispatch } from '../../base/BaseTypes';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import { RootState } from '../../base/reducers';
import { TitterTooterState } from './TitterTooterState';
import Mathematics from '../../base/Mathematics';
import Handle from '../../components/GameObjects/Handle';
 
const mapStateToProps = (state:RootState ) => {
  
 
var obj= {

   ...state.teeterTotter
};
 
return obj;
 
}





const mapDispatchToProps = (dispatch:TeeterTotterThunkDispatch) => {




  return {

    DisableMove:(item:LeftSideItem,index:number)=>{
       
         dispatch( DisableMove(item,index));
       
    },

    InitGame:()=>{

   
         let timer:number=0;
         dispatch(RequestleftSideFloatingShape(timer));
          setInterval(() => {
     
        timer++;
          dispatch(NewGameTime(timer));
          if((timer*24)%400==0)
          {
            debugger;
            dispatch(RequestleftSideFloatingShape(timer));
          }

        },700,0);
       dispatch(NewGameTimerHandle(0));
      
      dispatch(InitializeGame(false));
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