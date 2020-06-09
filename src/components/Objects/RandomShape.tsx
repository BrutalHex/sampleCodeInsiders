
import {getUUID,getRandomColor} from '../../base/baseService'
import RandomGenerator from './RandomGenerator'


 export default class RandomShape {
    constructor( ) {
        this.id=`left_${getUUID()}`;
        this.shapeType=  RandomGenerator.getRndShape();
        this.Weight=RandomGenerator.getRndInteger(1,10);
        this.fill=getRandomColor();
        this.height=80;
        this.width=80;
        this.posY= 0;
      this.posX=0;
      this.isFloating=true;
      this.Force=0;
      if(this.shapeType=='circle')
      {
       this.height=50;
      }
    }

    
    

    CalculateForce(handleLength)
    {
       this.Force= Math.abs( this.Weight*(handleLength-this.posX));
       return this.Force;
    }


   MoveDownObject(bottomBundry)
   {
    
     if(this.isFloating)
     {
         if(  this.posY >=bottomBundry )
          {
            this.posY=bottomBundry-0.2- this.height;
            this.isFloating=false;
          }
          else{
            this.posY++;
          }
     }
  
   }


  
  }