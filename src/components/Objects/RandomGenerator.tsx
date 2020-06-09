import {getShapeArray,getRandomColor} from '../../base/baseService'


export default class  RandomGenerator
{

    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      static* shuffle(array) {

        var i = array.length;
    
        while (i--) {
            yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
        }
    
    }


      static shaffleDNums=this.shuffle(getShapeArray());
      static getRndShape()
      {
       var val= this.shaffleDNums.next().value;
       if(val==undefined)
       {
        this.shaffleDNums=this.shuffle(getShapeArray());
        val=this.shaffleDNums.next().value;
        
       }
       return val;
      }

}