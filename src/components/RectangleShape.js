import React from 'react';
import TextOfshape from './TextOfshape'
const RectangleShape = (props) => {
      
  const item=props.Item;

return (
   <g    >
        <rect      id={item.id}  x={item.posX}  y={(item.posY)}
    style={{fill:item.fill} }
    width={item.width}  height={item.height}  />
    <TextOfshape  
    Item={item}
    />
   </g>
 
)
};

export default RectangleShape;
