import {Dispatch,bindActionCreators,Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useSelector } from 'react-redux'

import LeftSideItem from '../../components/Objects/LeftSideItem'
import RightSideItem from '../../components/Objects/RightSideItem'
import Mathematics from '../../components/Objects/Mathematics'
import 
{
  creatAction,ActoinTypes,Initialize_APP,Game_Timer_Handle,Reset_Game ,Game_Over,Disable_Move,New_Game_Time,New_Left_Side_Shape
} from '../../base/ActionTypes'
 
type TeeterTotterThunkResult = ThunkAction<ActoinTypes, {}, undefined,Action>;
type TeeterTotterThunkDispatch = ThunkDispatch<{}, undefined, Action>;



   export const RequestleftSideFloatingShape=(timer:number):TeeterTotterThunkResult=>
 {  
   var state=useSelector((state:any) => state.teeterTotter);
   debugger;
    var obj=new LeftSideItem(timer)
 let totalWeight=0;
 let leftSideForce=0;

 let handleEffectiveLen=state.handle.width/2;
 
  var itemsOfLeft=state.leftSideShape;
  itemsOfLeft.map((item:any,index:number )=>   {
    
    totalWeight=totalWeight+item.weight;
    if(!item.isFloating)
    {
       leftSideForce=leftSideForce+  item.CalculateForce(handleEffectiveLen);
    }
   
   });

     var rightForce=  !state.rightSideShape.CalculateForce ? 0: state.rightSideShape.CalculateForce(handleEffectiveLen);
     
 
     var angle=Mathematics.CalculateEquilibreumAngle(rightForce,leftSideForce);
     

      var forcediff=(leftSideForce-rightForce);
       
  
  if(totalWeight+obj.weight<=20 && (Math.abs(angle)<30 ))
  {
    return NewLeftSideShape(forcediff,obj,angle) ;
  }

  angle=Mathematics.GetMaxAngle(angle,30);

  clearInterval( state.GameTimerId)
     
 
  return   GameOver(forcediff,angle);
    
}






 
export function InitializeGame(shape:RightSideItem):   TeeterTotterThunkResult{

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction( Initialize_APP,shape)
);
  

}    





export function NewLeftSideShape(forcediff:number, shape:LeftSideItem, angle:number):   TeeterTotterThunkResult{

 
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  New_Left_Side_Shape,{ ForceDiff:forcediff , left:shape , angle:  angle})
);

}  


 

     

 
export function DisableMove(item:any,index:number):   TeeterTotterThunkResult{

  item.isFloating=false;
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  Disable_Move,{item:item,index:index}) 
);
  


}  

 
export function GameOver(forcediff:number,angle:number): TeeterTotterThunkResult {

   return  (dispatch:TeeterTotterThunkDispatch) => 
         dispatch(  
        creatAction(  Game_Over,{
        ForceDiff:forcediff,
        angle:  angle
        })
     );
  
} 
   
export function ResetGame():    TeeterTotterThunkResult{
 
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  Reset_Game,'') 
);

}  


export function NewGameTimerHandle(id:number ):    TeeterTotterThunkResult{

  return  (dispatch:TeeterTotterThunkDispatch) => 
         dispatch(  
          creatAction(  Game_Timer_Handle,id) 
     );

}  

export function NewGameTime(timer:number):   TeeterTotterThunkResult{
  

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  New_Game_Time,timer)
);

   
}  

 
 