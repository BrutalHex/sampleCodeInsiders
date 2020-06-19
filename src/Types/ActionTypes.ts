import {  InitialState } from '../base/BaseReducer';
import { IInitializeAction } from './IInitializeAction';
import { INewLeftSideShapeAction } from './INewLeftSideShapeAction';
import { IDisableMoveAction } from './IDisableMoveAction';
import { INewGameTimeAction } from './INewGameTimeAction';
import { IGameOverAction } from './IGameOverAction';
import { IResetGameAction } from './IResetGameAction';
import { IGameTimerHandleAction } from './IGameTimerHandleAction';
import { IGeneralAction } from './IGeneralAction';
  export const   Initialize_APP        ='Initialize';
  export const   New_Left_Side_Shape    ='New_Left_Side_Shape';
  export const   Disable_Move           ='Disable_Move';
  export const   New_Game_Time          ='New_Game_Time';
  export const   Game_Over               ='GameOver';
  export const   Reset_Game              ='Reset_Game';
  export const   Game_Timer_Handle       ='Game_Timer_Handle';


  export   function creatAction<TType,TPayload>( inputType:TType, inputPayload:TPayload):IGeneralAction<TType,TPayload>{

            let result : IGeneralAction<TType, TPayload> = { type:inputType, payload:inputPayload , error:false, meta:null};

              return result   ;

  }
  
  

 export type  ActoinTypes =  IInitializeAction
                             | INewLeftSideShapeAction 
                             | IDisableMoveAction
                             | INewGameTimeAction
                             | IGameOverAction
                             | IResetGameAction
                             | IGameTimerHandleAction                             
                             ;


       













