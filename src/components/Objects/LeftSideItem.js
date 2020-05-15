

import RandomShape from './RandomShape'
import {getRndInteger} from '../../base/baseService'

export default class LeftSideItem extends RandomShape {
    constructor(timeSnap) {
      super( );  
      this.posY= 0;
      this.posX=getRndInteger(30,400);
      this.timeSnap=timeSnap;
    }
  
    
  }
  