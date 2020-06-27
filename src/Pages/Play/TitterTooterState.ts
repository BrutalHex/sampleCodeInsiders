 
import LeftSideItem from '../../components/GameObjects/LeftSideItem'
import RightSideItem from '../../components/GameObjects/RightSideItem'
import Handle from '../../components/GameObjects/Handle'
import { NullableNumber } from '../../base/BaseTypes';
export class TitterTooterState 
 {
     gameTime:number=0;
     gameTimerId?:NullableNumber=null;
    isInit:boolean=true;
    rightSideShape:RightSideItem;
    leftSideShape:Array<LeftSideItem>=[];
    gameOver:boolean=false;

    handle:Handle;
    
    constructor()
    {
        
        debugger;
        this.rightSideShape=new RightSideItem();
        this.handle=new Handle();

    }
}
