
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RectangleShape from '../../components/RectangleShape'
import CircleShape from '../../components/CircleShape'
import TriangleShape from '../../components/TriangleShape'
const TeeterTotterPage = ({  isInit,left ,right ,handle,gameTime,initGame,disableMove,ForceDiff,angle}) => {
   var timer=0;

       
      

     console.log('angle   '+ angle);


   var getSvgDrawing=(item,index)=>{

    switch(item.shapeType) {
      case 'rectangle':
        return <RectangleShape 
        Index={index}
        Item={item}
       
        key={`rectangles_${item.id}`}/>
      
      case 'circle':
        return <CircleShape 
        Index={index}
        Item={item}
       
        key={`circle_${item.id}`}/>
     
        case 'triangle':
          {
               return <TriangleShape 
          Index={index}
          Item={item}
         
          key={`triangle_${item.id}`}/>
          }
       
     
      default:
         return null;
    } 

   };


   if(isInit)
   {
    
       initGame();
       setTimeout(function() {
        
        document.getElementById('parentcontainer').focus();
          
      }, 200);
   }

   right.posY=handle.y-right.height;
   var rightItem= getSvgDrawing(right,0);
    
  var items=  left.map((item, index) => {
        
      if(item.isFloating)
      {    
         var yPosition=(item.posY)+((gameTime*1)-item.timeSnap);
         if(yPosition>=handle.y)
         {
          item.posY=handle.y-item.height;
          item.isFloating=false;
          disableMove(item,index);
         }
         else{
          item.posY=yPosition;
         }
      }
         return getSvgDrawing(item,index);
    });
  
     var lastItem = left[left.length-1];
      var   handleKeyDown=(e)=>{
           if(lastItem.isFloating)
           {
            e.preventDefault();    
       
             var step=30;
            if(e.key=='ArrowLeft')
             {
               lastItem.posX=lastItem.posX-step;
               if(lastItem.posX <= 30  )
                 {
                   lastItem.posX=30;
                 }
             }
     
             if(e.key=='ArrowRight')
             {
               lastItem.posX=lastItem.posX+step;
               if(lastItem.posX >= 400  )
                {
                  lastItem.posX=400;
                }
             }
           
           }
 
      }


      var handleDivLoadd=()=>{
           
             console.log('This loaded');  
             debugger;
             document.getElementById('parentcontainer').focus();

      }


    return (


        <div className="col-12 text-center"  tabIndex={0} 
          id="parentcontainer"
          onLoad={handleDivLoadd}
       onKeyDown={handleKeyDown}
      
          
            >
    
         <svg width="1000" height="800"
       
         xmlns="http://www.w3.org/2000/svg" className="scene">

<g     transform={`rotate(${angle} 500 483.24999)`}>
  {rightItem}
{items}
<rect stroke="#bf0000" fill="#0e21f4" stroke-width="1.5" x="0.75" y="483.24999" width="991" height="5" 
  id="handle"/>
</g>

<path id="baseTriangle" d="M450.5,769.3750009610361 L500,484.6250090898019 L549.5,769.3750009610361 L450.5,769.3750009610361 z" 
opacity="1" stroke-width="0" fill="#3f7f00" stroke="#3f7f00"></path>
<rect id="ground" height="30" width="995.00002" y="769.25001" x="2.5" 
stroke-width="0" fill="#3f7f00" stroke="#3f7f00"></rect>
</svg>

        </div>
    );

 
}
export default TeeterTotterPage;