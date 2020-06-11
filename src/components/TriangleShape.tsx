import React,{FunctionComponent} from 'react';
import TextOfshape from './TextOfshape'

const TriangleShape : FunctionComponent<any>= (props) => { 

const item=props.Item;

 //Weight
return (
 <g>
  <path 
  style={{fill:item.fill}}
  transform={`translate(${item.posX},${item.posY})`}
  id={item.id}  
   d="m5,76.5l35,-73l35,73l-70,0z"  />
   <TextOfshape  
   transform={`translate(${item.posX},${item.posY})`}
    Item={item}
    CustomedY={item.posY+50}
    
    />
  
 </g>

)

};

export default TriangleShape;
