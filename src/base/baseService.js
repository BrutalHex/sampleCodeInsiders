 
import React from 'react'
import uuid from 'react-uuid'

export function getUUID()
{
    return uuid();
}

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


  export function getShapeArray()
  {
    return ['rectangle','circle','triangle']
  }

  export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }