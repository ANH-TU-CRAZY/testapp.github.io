import '../chuacss/Intro.css'
function Intro(){
    return(
        <div class='intro'>
        <menu1>
         <img src='https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1543994891974-HDKMY6WJLCIK65MY9L9X/47165647_2540107279349514_4588545486255816704_n.jpg'></img>
         <div class="text">
         <h1>POZAA</h1>
         <p>Pozaa đảm bảo sự an toàn vệ sinh thực phẩm,nhanh chóng,an toàn,tiện lợi nhất tới khách hàng thân yêu.Luôn đặt chữ tín lên hàng đầu</p>
         <p1>Tại đây chúng tôi có tất cả các sản phẩm:</p1>
         </div>
          <div class="list-group">
             <li><i class="fas fa-4x fa-wine-glass-alt"></i>
             <p>Đồ uống gồm nhiều loại đồ uống có ga,không có ga,nước ép hoa quả,sinh tố</p>
             </li>
             <li><i class="fas fa-4x fa-hamburger"></i>
             <p>Đồ ăn nhanh gồm nhiều loại như bánh mì,hamburger,bánh ngọt</p>
             </li>
             <li><i class="fas fa-4x fa-utensils"></i>
             <p>Đồ ăn gồm nhiều loại cơm,phở,mì,bún đậu mắm tôm</p>
             </li>
         </div>
        </menu1>
        <nav id='nav'>
            <div class='anh1'>
            <img src="https://2sao.vietnamnetjsc.vn/images/2019/07/27/04/38/nhan-vien-mac-do-ngu-di-lam-01.jpg"/>
            <p>Nhân viên trực hot line 24/24 nhằm phục vụ tốt nhất cho khách hàng</p>
            </div>
            <div class='anh2'>
            <img  id='anh2'src='https://image.thanhnien.vn/1024/uploaded/minhnguyet/2021_05_08/shipper-1_hgci.jpg'/>
            <p>Shipper thân thiện,hoà đồng,giao hàng nhanh chóng</p>
            </div>
        </nav>
    </div>
    )
}
export default Intro;