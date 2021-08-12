import ProductsNav from "./ProductsNav";
import ItemsHot from "./ItemsHot";
function Nav() {
    return (
      <div> 
        <nav className="ListItem">
        <div id="list"><p>SẢN PHẨM</p></div>
        <div className="products"> 
          <ProductsNav/>
          <ul class="pagination">
          <li class="back"><a href="#">Back</a></li>
          <li class='pagenumber'><a href="#">1</a></li>
          <li class='pagenumber'><a href="#">2</a></li>
          <li class='pagenumber'><a href="#">3</a></li>
          <li class='pagenumber'><a href="#">4</a></li>
          <li class='pagenumber'><a href="#">5</a></li>
          <li class='next'><a href="#">Next</a></li>
        </ul>
        </div>
      </nav>
       <menu class="ItemsHot">
       <p5>BÁN CHẠY NHẤT</p5>
        <ItemsHot/>
        <a id='prev' href='#'><img src='https://cdn3.iconfinder.com/data/icons/common-4/24/ui-18-512.png'></img></a>
           <a id='back' href='#'><img src='https://static.thenounproject.com/png/464827-200.png'></img></a>
        </menu>
     </div>
    );
  }
  
  export default Nav;