import { Component } from "react";
import ItemHot from "./ItemHot";
import {connect} from 'react-redux'
class ItemsHot extends Component{
    render(){ 
      var{itemHots}=this.props;
    return (          
          <div id="lists">
          {this.ShowItemHot(itemHots)}
          </div>
        
    );
} 
    ShowItemHot(itemHots){
      var result=null;
      if(itemHots.length>0){
      result=itemHots.map((itemHot,index)=>{
      return<ItemHot key={index} itemHot={itemHot}/>
      })
      }
      return result;
    }
  };
  const mapStateToProps=(state)=>{
    return{
      itemHots:state.itemHots
    }
  }
  export default connect(mapStateToProps,null)(ItemsHot);