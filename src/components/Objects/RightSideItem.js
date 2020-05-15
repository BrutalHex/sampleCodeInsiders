
import RandomShape from './RandomShape'
import {getRndInteger} from '../../base/baseService'
export default class RightSideItem extends RandomShape {
    constructor() {
      super( );  
      this.posY= 0;
      this.posX=getRndInteger(550,880);
       


    }
  
    
  }
  