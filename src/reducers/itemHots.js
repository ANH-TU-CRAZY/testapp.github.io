var initialState=[
    {
        id:1,
        name:"Cơm Tấm",
        img:'https://img-global.cpcdn.com/recipes/49876fe80303b991/751x532cq70/c%C6%A1m-t%E1%BA%A5m-s%C6%B0%E1%BB%9Dn-recipe-main-photo.jpg',
        price:25000,
        des:"Số 6-Phùng Hưng-Hà Nội",
        rating:5
    },
    {
        id:2,
        name:"Bún Đậu Mắm Tôm",
        img:'https://vcdn-giadinh.vnecdn.net/2021/01/15/bun-1-5687-1610696220.jpg',
        price:30000,
        des:"Số 18-Ngõ 521-Cổ Nhuế",
        rating:4
    },
    {
        id:3,
        name:"Bún riêu",
        img:'https://i.ytimg.com/vi/C1P1Cw9J1-I/maxresdefault.jpg',
        price:20000,
        des:"Số 16-Hoàng Quốc Việt-Hà Nội",
        rating:3
    },
    {
        id:4,
        name:"Cơm Gà",
        img:'https://cdn.bepcuoi.com/media/650-425-com-ga-nha-trang-bepcuoi-981.jpg',
        price:20000,
        des:"Số 16-Hoàng Quốc Việt-Hà Nội",
        rating:3
    }
]
  const itemHots=(state=initialState,action)=>{
    switch(action.type){
        default:return[...state];
    }

  }
  export default itemHots;