var initialState=[
    {
        id:1,
        name:"Bánh canh  cua",
        img:'https://cdn.huongnghiepaau.com/wp-content/uploads/2019/01/banh-canh-cua.jpg',
        price:25000,
        des:"Số 6-Phùng Hưng-Hà Nội",
        rating:5
    },
    {
        id:2,
        name:"Cơm rang dưa bò",
        img:'https://ameovat.com/wp-content/uploads/2018/02/cach-lam-com-rang-dua-bo-5-600x400.jpg',
        price:30000,
        des:"Số 18-Ngõ 521-Cổ Nhuế",
        rating:4
    },
    {
        id:3,
        name:"Cơm Tấm",
        img:'https://images.foody.vn/res/g10/98048/prof/s576x330/foody-upload-api-foody-mobile-com-190311132057.jpg',
        price:50000,
        des:"Số 20-Hoàng Hoa Thám-Hà Nội",
        rating:3
    },
    {
        id:4,
        name:"Bún riêu",
        img:'https://i.ytimg.com/vi/C1P1Cw9J1-I/maxresdefault.jpg',
        price:20000,
        des:"Số 16-Hoàng Quốc Việt-Hà Nội",
        rating:2
    },
    {
        id:5,
        name:"Vịt Quay",
        img:'https://cdn.tgdd.vn/Files/2020/05/22/1257500/cach-lam-vit-quay-sot-tieu-den-da-gion-hap-dan-t.jpg',
        price:100000,
        des:"Số 50-Đường Láng-Hà Nội",
        rating:5
    },
    {
        id:6,
        name:"Bún Đậu Mắm Tôm",
        img:'https://vcdn-giadinh.vnecdn.net/2021/01/15/bun-1-5687-1610696220.jpg',
        price:35000,
        des:"Ngách 43/21-Tân Xuân-Xuân Đỉnh",
        rating:3
    },
    {
        id:7,
        name:"Cơm Niêu",
        img:'https://cdn.beptruong.edu.vn/wp-content/uploads/2020/09/com-nieu.jpg',
        price:80000,
        des:"Số 80-Hoàng Quốc Việt-Hà Nội",
        rating:2,
    },
    {
        id:8,
        name:"Bún Bò",
        img:'https://image.thanhnien.vn/1024/uploaded/congthang/2019_10_09/anh_1_dzzf.jpg',
        price:100000,
        des:"Số 22-Tôn Thất Thuyết-Hà Nội",
        rating:3
    },
    {
        id:9,
        name:"Tiger Sugar",
        img:'https://cdn-www.vinid.net/2020/10/7e0af56e-tr%C3%A0-s%E1%BB%AFa-tiger-sugar.jpg',
        price:100000,
        des:"Sô 3-Ngõ 98-Vũ Trọng Phụng",
        rating:5
    },
    {
        id:10,
        name:"Trà Sữa Matcha",
        img:'https://mqflavor.com/wp-content/uploads/2021/03/Nhung-huong-vi-tra-sua-tren-the-gioi-pho-bien-nhat-hien-nay-5.jpg',
        price:40000,
        des:"Số 3-Trần Quốc Hoàn-Hà Nội",
        rating:2
    },
    {
        id:11,
        name:"Bánh Mì Ba Tê",
        img:'https://thietbibepviet.vn/wp-content/uploads/2020/07/banh-mi-pate-ngon.jpg',
        price:25000,
        des:"SÔ 104A-TT Thanh Xuân Bắc",
        rating:4
    },
    {
        id:12,
        name:"Nước Ép Trái Cây",
        img:'https://cdn.tgdd.vn/2021/01/CookProduct/THUMB1-1200x676-14.jpg',
        price:30000,
        des:"Số 22-Tôn Thất Thuyết-Hà Nội",
        rating:5
    },
]
  const Allproducts=(state=initialState,action)=>{
    switch(action.type){
        default:return[...state];
    }

  }
  export default Allproducts;