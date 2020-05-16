
import LeftSideItem from '../../components/Objects/LeftSideItem'
 import Mathematics from '../../components/Objects/Mathematics'
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
     
     var angle=Mathematics.CalculateEquilibreumAngle(leftSideForce,rightForce);
      var forcediff=(leftSideForce-rightForce);
       

  if(totalWeight+obj.Weight<=20)
  {
    var obj=new LeftSideItem(timer);
    var resultToDispatch={};
    resultToDispatch.type= ActoinTypes.newLeftSideShape;
    resultToDispatch.data={ ForceDiff:forcediff , left:obj , angle:  angle}

     return  dispatch =>  {dispatch(  {...resultToDispatch});}
    
  }

  return   dispatch =>  {

    dispatch(  
        {
         type: ActoinTypes.AdjustForce,
         data:  {
           ForceDiff:forcediff,
           angle:  angle
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
 
  

 
 
 


         
     
    


 