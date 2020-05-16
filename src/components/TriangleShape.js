import React from 'react';
import TextOfshape from './TextOfshape'

const TriangleShape = (props) => { 

const item=props.Item;

 //Weight
return (
 <g>
  <path 
  style={{fill:item.fill}}
  transform={`translate(${item.posX},${item.posY})`}
  id={item.id}  
   d="m5,76.5l35,-73l35,73l-70,0z" id="svg_1" />
   <TextOfshape  
   transform={`translate(${item.posX},${item.posY})`}
    Item={item}
    CustomedY={item.posY+50}
    />
  
 </g>

)

};

export default TriangleShape;
