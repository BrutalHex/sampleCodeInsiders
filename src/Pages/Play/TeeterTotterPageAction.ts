 
import { useSelector } from 'react-redux'
import {  TitterTooterState } from './TitterTooterState';

import {TeeterTotterThunkResult,TeeterTotterThunkDispatch,useTypedSelector} from '../../base/BaseTypes'
 import LeftSideItem from '../../components/GameObjects/LeftSideItem'
import RightSideItem from '../../components/GameObjects/RightSideItem'
import Mathematics from '../../base/Mathematics'
import 
{
  creatAction,ActoinTypes,Initialize_APP,Game_Timer_Handle,Reset_Game ,Game_Over,Disable_Move,New_Game_Time,New_Left_Side_Shape, New_Right_Side_Shape, Change_Handle
} from '../../Types/ActionTypes'
import DisableMoveDto from '../../components/GameObjects/DisableMoveDto';


import Handle from '../../components/GameObjects/Handle';
 




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

   NewLeftSideShape(obj) ; 

    return HandleChanged(forcediff,angle);
  }

  angle=Mathematics.GetMaxAngle(angle,30);

  clearInterval( state.gameTimerId as number)
  HandleChanged(forcediff,angle);
 
  return   GameOver(forcediff,angle);
    
}






 
export function InitializeGame(isinit:boolean):   TeeterTotterThunkResult<ActoinTypes>{

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction( Initialize_APP,isinit)
);
  

}    

export function NewRightSideItem(shape:RightSideItem):   TeeterTotterThunkResult<ActoinTypes>{

  return  (dispatch:TeeterTotterThunkDispatch) => 
  dispatch(  
    creatAction( New_Right_Side_Shape,shape)
);
  

}    


export function HandleChanged(forcediff:number, angle:number): TeeterTotterThunkResult<ActoinTypes>
{
  return  (dispatch:TeeterTotterThunkDispatch) =>  dispatch( creatAction(  Change_Handle,    new Handle(angle,forcediff)     ) );
} 

export function NewLeftSideShape(  shape:LeftSideItem ):   TeeterTotterThunkResult<ActoinTypes>{

  return  (dispatch:TeeterTotterThunkDispatch) =>  dispatch(   creatAction(  New_Left_Side_Shape,     shape  ));

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
        creatAction(  Game_Over,true)
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

 
 