import { Component } from "react";

class ProductNav extends Component {
    render(){
      var {product}=this.props;
    return (
      <div id="product">
        <div className="card text-center card-cascade narrower">
            <div className="view overlay hm-white-slight ">
              <img src={product.img} className="img-fluid" alt={product.img} />
              <a>
                <div className="mask waves-light waves-effect waves-light" />
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a>{product.name}</a>
                </strong>
              </h4>
              <p className="card-text">
              {product.des}
              </p>
              <ul className="rating">
                <li>
                  {this.ShowRating(product.rating)}
                </li>
              </ul>
              <div className="card-footer">
                <span className="left">{product.price}</span>
                <span className="right">
                  <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title data-original-title="Add to Cart">
                    <i className="fa fa-shopping-cart" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          </div>
    );
 }
   ShowRating(rating){
     var result=[];
     for(var i=1;i<= rating;i++){
       result.push(<i key={i} class='fa fa-star'></i>);
     }
     for(var j=1;j<=(5-rating);j++){
       result.push(<i key={j+i} class="far fa-star"></i>); 
     }
     return result;
   }
  } 
  
  export default ProductNav;