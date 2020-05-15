
import LeftSideItem from '../../components/Objects/LeftSideItem'
 
export const ActoinTypes={ initialize:'Initialize',
                          newLeftSideShape:'newLeftSideShape',
                          disableMove:'disableMove',
                          NewGameTime:'NewGameTime',
                          AdjustForce:'AdjustForce'
                        };



  function leftSideFloatingShape(timer,getState)
 {  
   var state=getState().teeterTotter;
    var obj=new LeftSideItem(timer)
 let totalWeight=0;
 let leftSideForce=0;

 let handleEffectiveLen=state.handle.width/2;



  var items=state.leftSideShape;
  items.map((item,index )=>   {
    
    totalWeight=totalWeight+item.Weight;
    if(!item.isFloating)
    {
       leftSideForce=leftSideForce+  item.CalculateForce(handleEffectiveLen);
    }
   
       

   });

     var rightForce=  !state.rightSideShape.CalculateForce ? 0: state.rightSideShape.CalculateForce(handleEffectiveLen);

  if(totalWeight+obj.Weight<=20)
  {
    var obj=new LeftSideItem(timer)

     return  dispatch =>  {

       dispatch(  
         {
          type: ActoinTypes.newLeftSideShape,
          data:  { ForceDiff:(rightForce-leftSideForce) , left:obj   }
     }
   );
     
 }
    
    

  }

  return   dispatch =>  {

    dispatch(  
        {
         type: ActoinTypes.AdjustForce,
         data:  {
           ForceDiff:(rightForce-leftSideForce)
        }
    }
  );
    
}
}

 
export function requestleftSideFloatingShape(timer) {
 
  return   dispatch =>  {
    dispatch(  
     (dispatch,getState) => {  dispatch (leftSideFloatingShape(timer,getState))}
  );
}

}





export function disableMove(item,index)
{
  item.isFloating=false;
   return   dispatch =>  {

    dispatch(  
        {
         type: ActoinTypes.disableMove,
        data:{item:item,index:index}
    }
  );
    
}
}

export function setGameTime(timer)
{
  return   dispatch =>  {

    dispatch(  
        {
         type: ActoinTypes.NewGameTime,
        data:timer
    }
  );
    
}
}


export function initGame(obj)
{

  
   return   dispatch =>  {
  
    dispatch(  
        {
      type: ActoinTypes.initialize,
      data:  obj
    }
  );
    
}

}
 
  

 
 
 


         
     
    


 