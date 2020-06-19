import {  InitialState } from '../../base/BaseReducer';
 import { ActoinTypes,Initialize_APP,New_Left_Side_Shape ,
  Disable_Move,New_Game_Time,Game_Over,Reset_Game,Game_Timer_Handle    }  from  '../../Types/ActionTypes';
 

export function TeeterTotterPageReducer(state = new InitialState(), action : ActoinTypes):InitialState {


  
  if (action.type == Initialize_APP ) {
    return    {

      ...state,
      isInit :false,
      rightSideShape: action.payload

    }as InitialState;
  }
 

  if(action.type== New_Left_Side_Shape)
  {
    var items=[...state.leftSideShape];
    items.push(action.payload.shape);
   
     var obj={
      ...state,
      leftSideShape:items,
      ForceDiff:action.payload.handle.forcediff,
      angle:  action.payload.handle.angle
    }as InitialState;
   

    return  obj ;
  }

  if(action.type== Disable_Move)
  {
    var items=[...state.leftSideShape];
 

  items[action.payload.index]=action.payload.item;
    

    return {
      ...state ,
      leftSideShape:items
    } as InitialState
  }
  
if(action.type== New_Game_Time)
{
  return {
    ...state ,
    gameTime:action.payload
   } as InitialState
}

if( action.type== Game_Over)
{
 
  return {
    ...state ,
    ForceDiff:action.payload.forcediff,
    angle:  action.payload.angle,
    GameOver:true
  } as InitialState
}
if(action.type== Reset_Game)
{
  return new InitialState()
}

if(action.type== Game_Timer_Handle)
{
  return {
    ...state ,
    GameTimerId:action.payload
  } as InitialState
}


  return  {
    ...state
  } as InitialState


}

export default TeeterTotterPageReducer;