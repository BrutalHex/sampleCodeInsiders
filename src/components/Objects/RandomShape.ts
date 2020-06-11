
import {getUUID,getRandomColor} from '../../base/baseService'
import RandomGenerator from './RandomGenerator'


 export default class RandomShape {

      id:string;
      shapeType:string;
      weight:number;
      fill:string;
      height:number;
      width:number;
      posY:number;
      posX:number;
      isFloating:boolean ;
      force:number;

    constructor(posX:number,posY:number) {
        this.id=`left_${getUUID()}`;
        this.shapeType=  RandomGenerator.getRndShape();
        this.weight=RandomGenerator.getRndInteger(1,10);
        this.fill=getRandomColor();
        this.height=80;
        this.width=80;
        this.posY= posY;
      this.posX=posX;
      this.isFloating=true;
      this.force=0;
      if(this.shapeType=='circle')
      {
       this.height=50;
      }
    }

    
    

    CalculateForce=(handleLength:number):number=>
    {
       this.force= Math.abs( this.weight*(handleLength-this.posX));
       return this.force;
    }


   MoveDownObject=(bottomBundry:number):void=>
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