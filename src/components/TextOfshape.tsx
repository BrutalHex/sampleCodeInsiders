import React, { FunctionComponent } from 'react';

const TextOfshape: FunctionComponent<any> = (props) => {
  const item = props.Item;
  var posX = !props.CustomedX ? item.posX + item.width / 2 : props.CustomedX;
  var posY = !props.CustomedY ? item.posY + item.height / 2 : props.CustomedY;

  return (
    <text
      fontWeight="bold"
      stroke="#0f0f00"
      fontFamily="'Times New Roman', Times, serif"
      fill="#ffffff"
      width={item.width}
      height={item.height}
      x={posX}
      y={posY}
      id={`svg_text_${item.id}`}
      fontSize="35"
      dominantBaseline="middle"
      textAnchor="middle"
    >
      {item.weight}
    </text>
  );
};

export default TextOfshape;
