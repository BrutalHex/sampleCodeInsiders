import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers';

import {  TitterTooterState } from './TitterTooterState';
 

import {createReducer, updateItemInArray, updateObject, updateItemInArrayIndex } from '../../base/reducerUtils'
import { INewRightSideItemAction } from '../../Types/INewRightSideItemAction';
import { INewLeftSideShapeAction } from '../../Types/INewLeftSideShapeAction';
import { IDisableMoveAction } from '../../Types/IDisableMoveAction';
import { INewGameTimeAction } from '../../Types/INewGameTimeAction';
import { IGameOverAction } from '../../Types/IGameOverAction';
import { IResetGameAction } from '../../Types/IResetGameAction';
import { IGameTimerHandleAction } from '../../Types/IGameTimerHandleAction';
import { NullableNumber } from '../../base/BaseTypes';
import RightSideItem from '../../components/GameObjects/RightSideItem';
import { IInitializeAction } from '../../Types/IInitializeAction';
import { IChangeHandleAction } from '../../Types/IChangeHandleAction';
 import Handle from '../../components/GameObjects/Handle';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
 




  function intializeApp(initstate:boolean, action:IInitializeAction): boolean{
  
    return  action.payload

}

function addNewLftSideItem(initstate:Array<LeftSideItem>=[], action:INewLeftSideShapeAction) {

  var items=[...initstate];
  items.push(action.payload.shape);
  return  items ;

}


function addNewRightSideItem(initstate:any, action:INewRightSideItemAction): RightSideItem
{
  return action.payload;


}



function disableMove(initstate:Array<LeftSideItem>, action:IDisableMoveAction) {
  
  const leftSideShapesArr = updateItemInArrayIndex<LeftSideItem>(initstate, action.payload.index, (item:LeftSideItem) => {
    return updateObject<LeftSideItem>(item, {...item, isFloating: false })
  });

  return leftSideShapesArr;
}

function changeHandle(initstate:any, action:IChangeHandleAction):Handle
{
    return new Handle(action.payload.angle,action.payload.forceDiff) ;
}

function newGameTime(initstate:number, action:INewGameTimeAction ): number{
  
  return action.payload;
    
}

function gameOver(initstate:boolean, action:IGameOverAction)
{
  return true;
}

function resetGame(state:any, action:IResetGameAction)
{
debugger;
var newState= new TitterTooterState();
   return newState;
}


function gameTimerHandle(initstate:NullableNumber, action:IGameTimerHandleAction):NullableNumber
{
  return   action.payload ;
}

 

  const intializeAppReducer = createReducer(false, {
    Initialize_APP: intializeApp
});



 

const newRightSideShapeReducer = createReducer(null, {
  New_Right_Side_Shape: addNewRightSideItem
});



 


const newGameTimeReducer = createReducer(0, {
  New_Game_Time: newGameTime
});


const gameOverReducer=createReducer(false,{
  Game_Over:gameOver

});



const gameTimerHandleReducer=createReducer(null,{

  Game_Timer_Handle: gameTimerHandle

})

 
const resetGameReducer=createReducer(null,{
  Reset_Game:resetGame
});

  //https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example

 




const leftShapeReducer = createReducer([], {
  New_Left_Side_Shape: addNewLftSideItem,
   Disable_Move: disableMove
  
})
const changeHandleshapeReducer= createReducer(null, {
  Change_Handle: changeHandle,
  
  
})

 


const teeterTotterBaseReducer = combineReducers<TitterTooterState>({
 
gameTime:newGameTimeReducer,
gameTimerId: gameTimerHandleReducer,
rightSideShape:newRightSideShapeReducer,
leftSideShape:leftShapeReducer,
isInit:intializeAppReducer,
gameOver:gameOverReducer,
handle: changeHandleshapeReducer

} )






const teeterTotterPageReducer=reduceReducers(teeterTotterBaseReducer, resetGameReducer)




export default teeterTotterPageReducer;