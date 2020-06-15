import {  initialState } from '../../base/BaseReducer'
 import { ActoinTypes } from './TeeterTotterPageAction';
export function TeeterTotterPageReducer(state = initialState, action) {


   


  

  if (action.type ==ActoinTypes.Initialize ) {
    return {

      ...state,
      isInit :false,
      rightSideShape: action.data

    };
  }
 

  if(action.type==ActoinTypes.New_Left_Side_Shape)
  {
    var items=[...state.leftSideShape];
    items.push(action.data.left);
   
     var obj={
      ...state,
      leftSideShape:items,
      ForceDiff:action.data.forceDiff,
      angle:  action.data.angle
    };
   
    
    return  obj;
  }

  if(action.type==ActoinTypes.Disable_Move)
  {
    var items=[...state.leftSideShape];
 

  items[action.data.index]=action.data.item;
    

    return {
      ...state ,
      leftSideShape:items
    }
  }
  
if(action.type==ActoinTypes.New_Game_Time)
{
  return {
    ...state ,
    gameTime:action.data
  }
}

if( action.type==ActoinTypes.GameOver)
{
 
  return {
    ...state ,
    ForceDiff:action.data.forceDiff,
    angle:  action.data.angle,
    GameOver:true
  }
}
if(action.type==ActoinTypes.Reset_Game)
{
  return {
     ...initialState
  }
}

if(action.type==ActoinTypes.Game_Timer_Handle)
{
  return {
    ...state ,
    GameTimerId:action.data
  }
}


  return {
    ...state
  }


}

export default TeeterTotterPageReducer;