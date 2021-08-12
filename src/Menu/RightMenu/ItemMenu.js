import { Component } from "react";

class ItemMenu extends Component {
  render(){
    var{NewItem}=this.props
    return ( <div class='view'>
           <div class="hm-white-slight">
             <li class="list-group-item">
               <img class='img-fluid' src={NewItem.img}></img>
               <a>
                        <div class="mask waves-light waves-effect waves-light"></div>
                    </a>
               <div id="actinfo">
               <h1>{NewItem.name}</h1>
               <p1>{NewItem.des}</p1>
               <p>{NewItem.price}</p>
               </div>
               </li>     
               </div>
               </div>  
    );
  }
  }
  
  export default ItemMenu;