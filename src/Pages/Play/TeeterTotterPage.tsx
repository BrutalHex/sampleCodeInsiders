import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import RectangleShape from '../../components/RectangleShape';
import CircleShape from '../../components/CircleShape';
import TriangleShape from '../../components/TriangleShape';
import GameOverModal from '../../components/GameOverModal';
import LeftSideItem from '../../components/GameObjects/LeftSideItem';
import RandomShape from '../../components/GameObjects/RandomShape';
import { TeeterTotterPageProps } from './TeeterTotterPageContainer';
import { useTypedSelector } from '../../base/BaseTypes';

const TeeterTotterPage: FunctionComponent<TeeterTotterPageProps> = ({
  InitGame,
  DisableMove,
  ResetGame,
}) => {
  let state = useTypedSelector((state) => state.teeterTotter);

  let getSvgDrawing = (item: RandomShape, index: number) => {
    switch (item.shapeType) {
      case 'rectangle':
        return <RectangleShape Index={index} Item={item} key={`rectangles_${item.id}`} />;

      case 'circle':
        return <CircleShape Index={index} Item={item} key={`circle_${item.id}`} />;

      case 'triangle': {
        return <TriangleShape Index={index} Item={item} key={`triangle_${item.id}`} />;
      }

      default:
        return null;
    }
  };

  if (state.isInit) {
    InitGame();
    setTimeout(function () {
      var item = document.getElementById('parentcontainer');
      item != null && item.focus();
    }, 200);
  }

  state.rightSideShape.posY = state.handle.y - state.rightSideShape.height;
  var rightItem = getSvgDrawing(state.rightSideShape, 0);

  var items = state.leftSideShape.map((item: LeftSideItem, index: number) => {
    if (item.isFloating) {
      var yPosition = item.posY + (state.gameTime * 1 - item.timeSnap);
      if (yPosition >= state.handle.y) {
        item.posY = state.handle.y - item.height;
        item.isFloating = false;
        DisableMove(item, index);
      } else {
        item.posY = yPosition;
      }
    }
    return getSvgDrawing(item, index);
  });

  var lastItem = state.leftSideShape[state.leftSideShape.length - 1];
  var handleKeyDown = (e: any) => {
    if (lastItem.isFloating) {
      e.preventDefault();

      var step = 30;
      if (e.key === 'ArrowLeft') {
        lastItem.posX = lastItem.posX - step;
        if (lastItem.posX <= 30) {
          lastItem.posX = 30;
        }
      }

      if (e.key === 'ArrowRight') {
        lastItem.posX = lastItem.posX + step;
        if (lastItem.posX >= 400) {
          lastItem.posX = 400;
        }
      }
    }
  };

  var handleDivLoadd = () => document.getElementById('parentcontainer')?.focus();

  var handleReset = () => {
    ResetGame();
  };

  return (
    <div className="col-12">
      <div className="row operatiopn-bar p-4">
        {/* <Button variant="primary" onClick={handleReset} disabled={!GameOver}>
    New Game !!!
  </Button> */}
      </div>
      <div className="row">
        <div
          className="col-12 text-center"
          tabIndex={0}
          id="parentcontainer"
          onLoad={handleDivLoadd}
          onKeyDown={handleKeyDown}
        >
          <GameOverModal Show={state.gameOver} Reset={handleReset} />
          <svg width="1000" height="800" xmlns="http://www.w3.org/2000/svg" className="scene">
            <g transform={`rotate(${state.handle.angle} 500 483.24999)`}>
              {rightItem}
              {items}
              <rect
                stroke="#bf0000"
                fill="#0e21f4"
                strokeWidth="1.5"
                x="0.75"
                y="483.24999"
                width="991"
                height="5"
                id="handle"
              />
            </g>

            <path
              id="baseTriangle"
              d="m450.5,769.375l49.5,-284.74999l49.5,284.74999l-99,0z"
              fill="#3f7f00"
              stroke="#3f7f00"
            />

            <text
              stroke="#000"
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="24"
              id="svg_1vbfhg"
              y="700.25826"
              x="483.45193"
              stroke-width="0"
              fill="#ffffff"
            >
              {state.handle.angle.toString().substring(0, 3)}
            </text>

            <rect
              id="ground"
              height="30"
              width="995.00002"
              y="769.25001"
              x="2.5"
              strokeWidth="0"
              fill="#3f7f00"
              stroke="#3f7f00"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default TeeterTotterPage;
