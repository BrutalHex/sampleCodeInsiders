import HandlePropDto from "./HandlePropDto"
import LeftSideItem from "../components/GameObjects/LeftSideItem"

export default  class  NewLeftSideShapeDto {
    
    handle:HandlePropDto
    shape:LeftSideItem
      
    constructor( handle:HandlePropDto,   shape:LeftSideItem)
    {
         this.handle=handle;
         this.shape=shape;



    }


} 
 