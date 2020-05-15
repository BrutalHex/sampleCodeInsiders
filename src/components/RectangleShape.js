

import React from 'react';


const RectangleShape = (props) => {

      const item=props.Item;


 //Weight
return (
    <rect    

      id={item.id}
    x={item.posX}
    y={(item.posY)}
    style={{fill:item.fill} }
    width={item.width}  height={item.height}  />

)
};

export default RectangleShape;
