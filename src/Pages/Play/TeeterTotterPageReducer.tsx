import {  initialState } from '../../base/BaseReducer'
 import { ActoinTypes } from './TeeterTotterPageAction';
export function TeeterTotterPageReducer(state = initialState, action) {


   


  

  if (action.type ==ActoinTypes.initialize ) {
    return {

      ...state,
      isInit :false,
      rightSideShape: action.data

    };
  }
 

  if(action.type==ActoinTypes.newLeftSideShape)
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

  if(action.type==ActoinTypes.disableMove)
  {
    var items=[...state.leftSideShape];
 

  items[action.data.index]=action.data.item;
    

    return {
      ...state ,
      leftSideShape:items
    }
  }
  
if(action.type==ActoinTypes.NewGameTime)
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
if(action.type==ActoinTypes.ResetGame)
{
  return {
     ...initialState
  }
}

if(action.type==ActoinTypes.GameTimerHandle)
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