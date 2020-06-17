 
import LeftSideItem from '../components/Objects/LeftSideItem'
import RightSideItem from '../components/Objects/RightSideItem'
import Handle from '../components/Objects/Handle'
export class InitialState 
 {
  
    isInit:boolean=true;
    angle:number=0;
    leftSideShape:Array<LeftSideItem>=[];
    rightSideShape:RightSideItem;

    handle:Handle;
    gameTime:number=0;
    forceDiff:number=0;
    gameOver:boolean=false;
    gameTimerId?:number | null=null;

    constructor()
    {
        this.rightSideShape=new RightSideItem();
        this.handle=new Handle();
    }
}
