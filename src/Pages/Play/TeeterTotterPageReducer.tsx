import {  InitialState } from '../../base/BaseReducer';
 import { ActoinTypes,Initialize_APP,New_Left_Side_Shape ,
  Disable_Move,New_Game_Time,Game_Over,Reset_Game,Game_Timer_Handle    }  from  '../../base/ActionTypes';
 

export function TeeterTotterPageReducer(state = new InitialState(), action : ActoinTypes) {


   


  

  if (action.type == Initialize_APP ) {
    return {

      ...state,
      isInit :false,
      rightSideShape: action.payload

    };
  }
 

  if(action.type== New_Left_Side_Shape)
  {
    var items=[...state.leftSideShape];
    items.push(action.payload.left);
   
     var obj={
      ...state,
      leftSideShape:items,
      ForceDiff:action.payload.forceDiff,
      angle:  action.payload.angle
    };
   
    
    return  obj;
  }

  if(action.type== Disable_Move)
  {
    var items=[...state.leftSideShape];
 

  items[action.payload.index]=action.payload.item;
    

    return {
      ...state ,
      leftSideShape:items
    }
  }
  
if(action.type== New_Game_Time)
{
  return {
    ...state ,
    gameTime:action.payload
  }
}

if( action.type== Game_Over)
{
 
  return {
    ...state ,
    ForceDiff:action.payload.forceDiff,
    angle:  action.payload.angle,
    GameOver:true
  }
}
if(action.type== Reset_Game)
{
  return {
     ...InitialState
  }
}

if(action.type== Game_Timer_Handle)
{
  return {
    ...state ,
    GameTimerId:action.payload
  }
}


  return {
    ...state
  }


}

export default TeeterTotterPageReducer;