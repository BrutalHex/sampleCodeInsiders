
import RandomShape from './RandomShape' 
import RandomGenerator from './RandomGenerator'

export default class RightSideItem extends RandomShape {
    constructor() {
      super( );  
      this.posY= 0;
      this.posX=RandomGenerator.getRndInteger(550,880);
       


    }
  
    
  }
  