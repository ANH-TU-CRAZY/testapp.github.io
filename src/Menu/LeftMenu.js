function LeftMenu() {
    return (
        <scrollbar>
        <div className="scrollbar">
         <ul class="list-group text-center">
            <a href="#" class="list-group-item active text-center">Danh Mục Sản Phẩm</a>
                   <li class="list-group-item"><p>Đồ Ăn</p></li>
                   <li class="list-group-item"><p>Đồ Ăn Nhanh</p></li>
                   <li class="list-group-item"><p>Đồ Uống</p></li>
                   <li class="list-group-item"><p>Món Mới</p></li> 
         </ul> 
        </div>
      </scrollbar>
    );
  }
  
  export default LeftMenu;