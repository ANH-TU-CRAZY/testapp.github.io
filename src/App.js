
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Information from './components/Information';
import Footer from './components/Footer';
import Intro from './components/Intro';
import AllItems from './AllItems/AllItems';
function App() {
  return (
     <Router>
     <div className="contentner2">
        {/* menu */}
        <Header/>
        <topnav>
        <div className="topnav">
          <ul className="item1">
                      <li><NavLink activeClassName='myactive' exact to="/">Trang chủ</NavLink></li>
                      <li><NavLink activeClassName='myactive' to='/AllItems'>Sản Phẩm</NavLink></li>
                      <li><NavLink activeClassName='myactive' to='/Information' >Tin Tức</NavLink></li>
                      <li><NavLink activeClassName='myactive' to='/Intro'>Giới thiệu</NavLink></li>
          </ul>
          <div className="box">
            <input type="search" id="search" placeholder="Bạn muốn mua gì?" />
            <button className="button"><i className="fa fa-search"></i>Tìm Kiếm</button>
          </div>
          <img id="img" src="https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/10/20.-pozaa.jpg"/>
        </div>
      </topnav>
      {/* {Nội dung} */}
         <Route path='/' exact component={Home}/>
         <Route path='/Information' exact component={Information}/>
         <Route path='/Intro' component={Intro}/>
         <Route path='/AllItems' component={AllItems}/>
         <Footer/>
      </div>
      </Router>
  );
}

export default App;
