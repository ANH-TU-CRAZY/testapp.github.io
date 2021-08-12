import { Component } from "react";
class ItemHot extends Component{
    render(){ 
      var {itemHot}=this.props
    return ( 
         <div class="list">   
         <li>
         <div id='card' className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight ">
           <img src={itemHot.img}></img>
           <a>
                <div className="mask waves-light waves-effect waves-light" />
              </a>
              </div>
              <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a>{itemHot.name}</a>
                </strong>
              </h4>
              <p className="card-text">
              {itemHot.des}
              </p>
              <div className="card-footer">
                <span className="left">{itemHot.price}</span>
              </div>
              <span className="right">
                  <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </span>
            </div>
           </div>
           </li>   
           </div>  
    );
}
    
  };
  export default  ItemHot;