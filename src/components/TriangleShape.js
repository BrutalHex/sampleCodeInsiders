

import React from 'react';


const TriangleShape = (props) => {

 
     const item=props.Item;


 //Weight
return (
 

<svg width="80" height="80" id={item.id}  x={item.posX} y={(item.posY)} xmlns="http://www.w3.org/2000/svg">
 <g>
  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g>
  <path stroke="#000" id="svg_1" d="m8.5,74.54399l31.5,-71l31.5,71l-63,0z" stroke-width="1.5" fill="#ccc"/>
 </g>
</svg>

)
};

export default TriangleShape;
