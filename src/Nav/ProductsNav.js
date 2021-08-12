
import { Component } from "react";
import { connect } from "react-redux";
import ProductNav from "./ProductNav";
class ProductsNav extends Component{
    render(){
        var {products}=this.props;
    return (
        <div>        
        {this.ShowProducts(products)}
       </div>
    );
}
    ShowProducts(products){
        var result=null;
        if(products.length>0){
            result=products.map((product,index)=>{
                   return<ProductNav key={index} product={product}/>
            }) 
        }
        return result;
    } 
  };
const mapStateToProps=(state)=>{
    return{
       products:state.products
    }
}
  export default connect(mapStateToProps,null) (ProductsNav);