

import React from 'react';


const CircleShape = (props) => {

 
     const item=props.Item;


 //Weight
return (


    <circle cx={item.posX} cy={(item.posY)} r="50"  style={{fill:item.fill} }   id={item.id}/>
)
};

export default CircleShape;
