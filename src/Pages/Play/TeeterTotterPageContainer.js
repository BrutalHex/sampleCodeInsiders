import { connect } from 'react-redux'
import TeeterTotterPage from './TeeterTotterPage'
 import {initGame,requestleftSideFloatingShape,setGameTime,disableMove} from './TeeterTotterPageAction'

import LeftSideItem from '../../components/Objects/LeftSideItem'
import RightSideItem from '../../components/Objects/RightSideItem'
 
const mapStateToProps = (state, ownProps) => {
  
 
var obj= {

    isInit  :state.teeterTotter.isInit,
    left    :state.teeterTotter.leftSideShape,
    right   :state.teeterTotter.rightSideShape,
    handle:state.teeterTotter.handle,
    gameTime:state.teeterTotter.gameTime,
    ForceDiff:state.teeterTotter.ForceDiff
};
 
return obj;
 
}


const mapDispatchToProps = (dispatch, ownProps) => {



  return {

    disableMove:(item,index)=>{
       
      
           
         
         dispatch( disableMove(item,index));
       
    },
    



    initGame:()=>{

    
         let timer=0;
         dispatch(requestleftSideFloatingShape(timer));
       setInterval(() => {
        timer++;
          dispatch(setGameTime(timer));
          if((timer*24)%400==0)
          {
             dispatch(requestleftSideFloatingShape(timer));
          }
        }, 41);
    
      dispatch(initGame(new RightSideItem()));
    }

 
  }
}

const TeeterTotterPageContainer =  (connect(
    mapStateToProps,
  mapDispatchToProps
)(TeeterTotterPage))
export default TeeterTotterPageContainer