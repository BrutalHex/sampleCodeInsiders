

import RandomShape from './RandomShape'
import RandomGenerator from './RandomGenerator'

export default class LeftSideItem extends RandomShape {
    constructor(timeSnap) {
      super( );  
      this.posY= 0;
      this.posX=RandomGenerator.getRndInteger(30,400);
      this.timeSnap=timeSnap;
    }
  
    
  }
  