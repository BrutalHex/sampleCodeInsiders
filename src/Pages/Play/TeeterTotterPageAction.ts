import {Dispatch,bindActionCreators,Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import LeftSideItem from '../../components/Objects/LeftSideItem'
import Mathematics from '../../components/Objects/Mathematics'
import 
{
   DisableMove,creatAction,ActoinTypes,Game_Timer_Handle,Reset_Game ,Game_Over,IGameOverAction

} from '../../base/ActionTypes'
 


   const leftSideFloatingShape=(timer:number,getState:any)=>
 {  
   var state=getState().teeterTotter;
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
     
     console.log('leftSideForce   '+leftSideForce)
     console.log('rightForce   '+rightForce)
    

     var angle=Mathematics.CalculateEquilibreumAngle(rightForce,leftSideForce);
      console.log('angle   '+angle)
         

      var forcediff=(leftSideForce-rightForce);
       
  
  if(totalWeight+obj.weight<=20 && (Math.abs(angle)<30 ))
  {
    var obj=new LeftSideItem(timer);
    var resultToDispatch={};
    resultToDispatch.type= ActoinTypes.New_Left_Side_Shape;
    resultToDispatch.data={ ForceDiff:forcediff , left:obj , angle:  angle}

     return   (dispatch: any) =>  {dispatch(  {...resultToDispatch});}
    
  }

  angle=Mathematics.GetMaxAngle(angle,30);

  clearInterval( state.GameTimerId)
     
 
  return   GameOver(forcediff,angle);
    
}




}

 
export function requestleftSideFloatingShape(timer) {
 
  return    (dispatch: any) =>  {
    dispatch(  
     (dispatch:any,getState:any) => {  dispatch (leftSideFloatingShape(timer,getState))}
  );
}

}





export function disableMove(item:any,index:number)
{
  item.isFloating=false;
   return  (dispatch: any) =>  {

    dispatch(  
      DisableMove({item:item,index:index})
  );
    
}
}

export function setGameTime(timer)
{
  return    (dispatch: any) =>  {

    dispatch(  
        {
         type: ActoinTypes.New_Game_Time,
        data:timer
    }
  );
    
}
}


export function initGame(obj)
{

  
   return    (dispatch: any) =>  {
  
    dispatch(  
        {
      type: ActoinTypes.Initialize,
      data:  obj
    }
  );
    
}

}

type MyThunkResult = ThunkAction<ActoinTypes, {}, undefined,Action>;
type MyThunkDispatch = ThunkDispatch<{}, undefined, Action>;

 
export function GameOver(forcediff:number,angle:number): MyThunkResult {
return  (dispatch:MyThunkDispatch) => 
         dispatch(  
      creatAction(  Game_Over,{
        ForceDiff:forcediff,
        angle:  angle
     })
  );
  
  ;

} 

 





   

export function ResetGame():   ActoinTypes{
  return creatAction(  Reset_Game,'') ;
}  




export function SetGameTimerHandle(id:string ):   ActoinTypes{

  return creatAction(  Game_Timer_Handle,id) ;

}  

 
 
  

 
 
 


         
     
    


 