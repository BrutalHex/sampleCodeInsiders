
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
      
   }

   right.posY=handle.y-right.height;
   var rightItem= getSvgDrawing(right,0);
    
  var items=  left.map((item, index) => {
        
      if(item.isFloating)
      {    
         var yPosition=(item.posY)+((gameTime*1)-item.timeSnap);
           item.posY=yPosition;
       if(item.posY>=handle.y)
       {
        item.posY=handle.y-item.height;
        item.isFloating=false;
        disableMove(item,index);
       }
      }
         return getSvgDrawing(item,index);
    });
  
 
    var   handleKeyDown=(e)=>{
           
      debugger;
      e.preventDefault();    
       console.log('The link was clicked.');  
      
       
      }


    return (


        <div className="col-12 text-center"  tabIndex="0"  onKeyPress={(e)=> {
          debugger;
          handleKeyDown(e);}}    >
    
         <svg width="1000" height="800" xmlns="http://www.w3.org/2000/svg" className="scene">

<g     transform={`rotate(${angle} 495.5 683.24999)`}>
  {rightItem}
{items}
<rect stroke="#bf0000" fill="#0e21f4" stroke-width="1.5" x="0.75" y="683.24999" width="991" height="5" 
  id="handle"/>
</g>

  <path fill="#f70e0e" stroke="#bf0000" stroke-width="1.5" opacity="0.5" d="m450.5,766.25l49.5,-76.75l49.5,76.75l-99,0z" 
  id="baseTriangle"/>
  <rect stroke="#000" fill="#7fff00" stroke-width="1.5" stroke-opacity="null" x="2.5" y="769.25001" width="995.00002" height="30" 
  id="ground"/>



</svg>








        </div>
    );



}
export default TeeterTotterPage;