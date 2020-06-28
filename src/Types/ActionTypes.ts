 import { INewRightSideItemAction } from './INewRightSideItemAction';
import { INewLeftSideShapeAction } from './INewLeftSideShapeAction';
import { IDisableMoveAction } from './IDisableMoveAction';
import { INewGameTimeAction } from './INewGameTimeAction';
import { IGameOverAction } from './IGameOverAction';
import { IResetGameAction } from './IResetGameAction';
import { IGameTimerHandleAction } from './IGameTimerHandleAction';
import { IGeneralAction } from './IGeneralAction';
import { IChangeHandleAction } from './IChangeHandleAction';
import { IInitializeAction } from './IInitializeAction';
  export const   Initialize_APP        ='Initialize_APP';
  export const   New_Right_Side_Shape    ='New_Right_Side_Shape';
  export const   New_Left_Side_Shape    ='New_Left_Side_Shape';
  export const   Disable_Move           ='Disable_Move';
  export const   New_Game_Time          ='New_Game_Time';
  export const   Game_Over               ='GameOver';
  export const   Reset_Game              ='Reset_Game';
  export const   Game_Timer_Handle       ='Game_Timer_Handle';
  export const   Change_Handle      ='Change_Handle';



  export   function creatAction<TType,TPayload>( inputType:TType, inputPayload:TPayload):IGeneralAction<TType,TPayload>{

            let result : IGeneralAction<TType, TPayload> = { type:inputType, payload:inputPayload , error:false, meta:null};

              return result   ;

  }
  
  

 export type  ActoinTypes =  INewRightSideItemAction
                             | INewLeftSideShapeAction 
                             | IInitializeAction
                             | IDisableMoveAction
                             | INewGameTimeAction
                             | IGameOverAction
                             | IResetGameAction
                             | IGameTimerHandleAction   
                             | IChangeHandleAction                          
                             ;


       













