
import RandomShape from './RandomShape' 
import RandomGenerator from './RandomGenerator'

export default class LeftSideItem extends RandomShape {

 
  timeSnap:number;

    constructor(timeSnap:number) {
      super(RandomGenerator.getRndInteger(30,400), 0);  
     
      this.timeSnap=timeSnap;
    }
  
    
  }
  
  