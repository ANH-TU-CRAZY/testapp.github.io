import { Component } from "react";
import AllItem from "./AllItem";
import '../chuacss/AllItems.css';
import {connect} from 'react-redux';
class AllItems extends Component{
    render(){ 
        var {Allproducts}=this.props;
    return (     
        <div class='allproducts'>
         <h1>
            Danh Sách Sản Phẩm
         </h1>
            {this.showAllproducts(Allproducts)}
            <ul id='allitem' class="pagination">
          <li class="back"><a href="#">Back</a></li>
          <li class='pagenumber'><a href="#">1</a></li>
          <li class='pagenumber'><a href="#">2</a></li>
          <li class='pagenumber'><a href="#">3</a></li>
          <li class='pagenumber'><a href="#">4</a></li>
          <li class='pagenumber'><a href="#">5</a></li>
          <li class='next'><a href="#">Next</a></li>
        </ul>
        </div>      
    );
}
   showAllproducts(Allproducts){
       var result=[];
       if(Allproducts.length>0){
        result=Allproducts.map((Allproduct,index)=>{
        return<AllItem key={index} Allproduct={Allproduct}/>
        })
    }
       return result;
   } 
  };
  const mapStateToProps=(state)=>{
      return{
          Allproducts:state.Allproducts
      }
  }
  export default connect(mapStateToProps,null) (AllItems);