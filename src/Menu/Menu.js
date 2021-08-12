import { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu/RightMenu";
class Menu extends Component {
  render(){
    return (
        <div className="mid">
        <LeftMenu/>
      <article>
      <div className="act">
        <img width="537px" height="394px" id="anh"  src="https://www.designbold.com/academy/wp-content/uploads/2018/08/th%E1%BB%A9c-%C4%83n-8.png" />
      </div>
    </article>
      <RightMenu/>
    </div>
    );
  }
  
  }
  export default Menu;
  