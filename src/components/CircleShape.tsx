import React, { FunctionComponent } from 'react';
import TextOfshape from './TextOfshape';

const CircleShape: FunctionComponent<any> = (props) => {
  const item = props.Item;

  //Weight
  return (
    <g>
      <circle cx={item.posX} cy={item.posY} r="50" style={{ fill: item.fill }} id={item.id} />
      <TextOfshape Item={item} CustomedX={item.posX} CustomedY={item.posY} />
    </g>
  );
};

export default CircleShape;
