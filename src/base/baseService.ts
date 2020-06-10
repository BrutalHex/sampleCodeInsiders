import { v4 as uuidv4 } from 'uuid';

export function getUUID()
{
    return uuidv4();
}

export function getRndInteger(min:number, max:number) {
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
  