

  export const   Initialize_APP  ='Initialize';
  export const   New_Left_Side_Shape    ='New_Left_Side_Shape';
  export const   Disable_Move   ='Disable_Move';
  export const   New_Game_Time   ='New_Game_Time';
  export const   Game_Over   ='GameOver';
  export const   Reset_Game  ='Reset_Game';
  export const   Game_Timer_Handle   ='Game_Timer_Handle';


  interface IGenericAction<TType,TPayload,TMETA>
  {
     type:  TType ,
     payload:TPayload,
     error: boolean ,
     meta:TMETA
  }


  interface IGeneralAction<TType,TPayload> extends  IGenericAction<TType,TPayload,any> {
  
  }


  export   function creatAction<TType,TPayload>( inputType:TType, inputPayload:TPayload):IGeneralAction<TType,TPayload>{

            let result : IGeneralAction<TType, TPayload> = { type:inputType, payload:inputPayload , error:false, meta:null};

              return result   ;

  }
  
  


interface IInitializeAction extends  IGeneralAction<typeof Initialize_APP,any>
 {

 }

interface INewLeftSideShapeAction extends  IGeneralAction<typeof New_Left_Side_Shape,any>
 {

 }
 
 interface IDisableMoveAction extends  IGeneralAction<typeof Disable_Move,any>
 {
   
 }
 
 
 interface INewGameTimeAction extends  IGeneralAction<typeof New_Game_Time,any>
 {
   
 }
export  interface IGameOverAction extends  IGeneralAction<typeof Game_Over,any>
 {
   
 }
 interface IResetGameAction extends  IGeneralAction<typeof Reset_Game,any>
 {
   
 }
 interface IGameTimerHandleAction extends  IGeneralAction<typeof Game_Timer_Handle,string>
 {
    
 }
 




 export type  ActoinTypes =  IInitializeAction
                             | INewLeftSideShapeAction 
                             | IDisableMoveAction
                             | INewGameTimeAction
                             | IGameOverAction
                             | IResetGameAction
                             | IGameTimerHandleAction                             
                             ;



export function Initialize(input:any):   ActoinTypes{

       return creatAction( Initialize_APP,input);
}                


export function NewLeftSideShape(input:any):   ActoinTypes{
   return creatAction(  New_Left_Side_Shape,input) ;
}  

export function DisableMove(input:any):   ActoinTypes{
   return creatAction(  Disable_Move,input) ;
}  


export function NewGameTime(input:any):   ActoinTypes{
   return creatAction(  New_Game_Time,input) ;
}  





