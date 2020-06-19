 
import LeftSideItem from '../components/GameObjects/LeftSideItem'
import RightSideItem from '../components/GameObjects/RightSideItem'
import Handle from '../components/GameObjects/Handle'
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
