 
import { useSelector } from 'react-redux'
import {  InitialState } from '../../base/BaseReducer';

import {TeeterTotterThunkResult,TeeterTotterThunkDispatch,useTypedSelector} from '../../base/BaseTypes'
 import LeftSideItem from '../../components/GameObjects/LeftSideItem'
import RightSideItem from '../../components/GameObjects/RightSideItem'
import Mathematics from '../../base/Mathematics'
import 
{
  creatAction,ActoinTypes,Initialize_APP,Game_Timer_Handle,Reset_Game ,Game_Over,Disable_Move,New_Game_Time,New_Left_Side_Shape
} from '../../Types/ActionTypes'
import DisableMoveDto from '../../Types/DisableMoveDto';
import HandlePropDto from '../../Types/HandlePropDto';
import NewLeftSideShapeDto  from '../../Types/NewLeftSideShapeDto';
 




export const RequestleftSideFloatingShape=(timer:number):TeeterTotterThunkResult<ActoinTypes>=>
 {  
   
   var state=useTypedSelector(state => state.teeterTotter);



   
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

  clearInterval( state.gameTimerId as number)
     
 
  return   GameOver(forcediff,angle);
    
}






 
export function InitializeGame(shape:RightSideItem):   TeeterTotterThunkResult<ActoinTypes>{

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction( Initialize_APP,shape)
);
  

}    





export function NewLeftSideShape(forcediff:number, shape:LeftSideItem, angle:number):   TeeterTotterThunkResult<ActoinTypes>{

 
 
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  New_Left_Side_Shape,      new   NewLeftSideShapeDto (new HandlePropDto(forcediff,angle) , shape)   )
);

}  


 

     

 
export function DisableMove(item:LeftSideItem,index:number):   TeeterTotterThunkResult<ActoinTypes>{

  item.isFloating=false;
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  Disable_Move,new DisableMoveDto(item,index))
);
  


}  

 
export function GameOver(forcediff:number,angle:number): TeeterTotterThunkResult<ActoinTypes> {

   return  (dispatch:TeeterTotterThunkDispatch) => 
         dispatch(  
        creatAction(  Game_Over,new HandlePropDto(forcediff,angle))
     );
  
} 
   
export function ResetGame():    TeeterTotterThunkResult<ActoinTypes>{
 
  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  Reset_Game,null) 
);

}  


export function NewGameTimerHandle(id:number ):    TeeterTotterThunkResult<ActoinTypes>{

  return  (dispatch:TeeterTotterThunkDispatch) => 
         dispatch(  
          creatAction(  Game_Timer_Handle,id) 
     );

}  

export function NewGameTime(timer:number):   TeeterTotterThunkResult<ActoinTypes>{
  

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction(  New_Game_Time,timer)
);

   
}  

 
 