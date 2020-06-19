import LeftSideItem from '../components/GameObjects/LeftSideItem'


export default class DisableMoveDto
{
    item:LeftSideItem
    index:number ;

   constructor(item:LeftSideItem,index:number)
   {
       this.item=item;
       this.index=index;
   }
     

}