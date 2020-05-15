
 import {getRndInteger,getUUID,getShapeArray,getRandomColor} from '../../base/baseService'



 export default class RandomShape {
    constructor( ) {
        this.id=`left_${getUUID()}`;
        this.shapeType=getShapeArray()[getRndInteger(0,2)];
        this.Weight=getRndInteger(1,10);
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
       this.Force= this.Weight*(this.posX-(handleLength));
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