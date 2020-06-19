import { v4 as uuidv4 } from 'uuid';

export const getUUID=():string => uuidv4();

export const  getRndInteger=(min:number, max:number):number =>{
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  export const getShapeArray=():Array<string> =>
  {
    return ['rectangle','circle','triangle']
  }

  export const getRandomColor= ():string =>{
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  