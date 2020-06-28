 
 
import {  TitterTooterState } from './TitterTooterState';

import {TeeterTotterThunkResult,TeeterTotterThunkDispatch} from '../../base/BaseTypes'
 import LeftSideItem from '../../components/GameObjects/LeftSideItem'
import RightSideItem from '../../components/GameObjects/RightSideItem'
import Mathematics from '../../base/Mathematics'
import 
{
  creatAction,ActoinTypes,Initialize_APP,Game_Timer_Handle,Reset_Game ,Game_Over,Disable_Move,New_Game_Time,New_Left_Side_Shape, New_Right_Side_Shape, Change_Handle
} from '../../Types/ActionTypes'
import DisableMoveDto from '../../components/GameObjects/DisableMoveDto';


import Handle from '../../components/GameObjects/Handle';
 



export const RequestleftSideFloatingShape=(timer:number) =>
 {  

     return (dispatch:TeeterTotterThunkDispatch,getState:any)=>
     {
      debugger;

      let state=getState().teeterTotter;
    
      let obj=new LeftSideItem(timer)
     let totalWeight=0;
     let leftSideForce=0;
    
     let handleEffectiveLen=state.handle.width/2;
     
     let itemsOfLeft=state.leftSideShape;
      debugger;
      itemsOfLeft.map((item:any,index:number )=>   {
        
        totalWeight=totalWeight+item.weight;
        if(!item.isFloating)
        {
           leftSideForce=leftSideForce+  item.CalculateForce(handleEffectiveLen);
        }
       
       });
    
       let rightForce=  !state.rightSideShape.CalculateForce ? 0: state.rightSideShape.CalculateForce(handleEffectiveLen);
         
     
         let angle=Mathematics.CalculateEquilibreumAngle(rightForce,leftSideForce);
         
    
         let forcediff=(leftSideForce-rightForce);
           
      
      if(totalWeight+obj.weight<=20 && (Math.abs(angle)<30 ))
      {
    
         dispatch( NewLeftSideShape(obj) ); 
    
        return dispatch( HandleChanged(forcediff,angle));
      }
    
      angle=Mathematics.GetMaxAngle(angle,30);
    
      clearInterval( state.gameTimerId as number);

      dispatch(HandleChanged(forcediff,angle));
     
     return dispatch(  GameOver(forcediff,angle));
  
     
     }
     

 
    
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
export function NewLeftSideShape(  shape:LeftSideItem ):   TeeterTotterThunkResult<ActoinTypes>{

 
 
  return  (dispatch:TeeterTotterThunkDispatch) =>  dispatch(   creatAction(  New_Left_Side_Shape,   shape   ));

}  

export function HandleChanged(forcediff:number, angle:number): TeeterTotterThunkResult<ActoinTypes>
{
  return  (dispatch:TeeterTotterThunkDispatch) =>  dispatch( creatAction(  Change_Handle,    new Handle(angle,forcediff)     ) );
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

 
 