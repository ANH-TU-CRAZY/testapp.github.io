import ItemMenu from "./ItemMenu";
import {connect} from 'react-redux'
import { Component } from "react";
class RightMenu extends Component{
  render(){
  var{NewItems}=this.props;
    return (
      <article>
        <div className="act1">
         <ul class="list-group">
         <a href="#" class="list-group-item active text-center">Nổi Bật</a>
          {this.ShowItemMenu(NewItems)}
          </ul> 
        </div>
          </article>
    );
  }
  ShowItemMenu(NewItems){
    var result=null;
    if(NewItems.length>0){
        result=NewItems.map((NewItem,index)=>{
               return<ItemMenu key={index} NewItem={NewItem}/>
        }) 
    }
    return result;
   } 
  }

  const mapStateToProps=(state)=>{
    return{
    NewItems:state.NewItems
  }
  }
  export default connect(mapStateToProps,null) (RightMenu);