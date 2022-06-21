import *as constantBook from '../constants/constantBooks';

const init={
    productBookData:[
        {
            id:1,
            title:'Review tiểu thuyết Sông Đông êm đềm',
            description:'Sông Đông êm đềm là một tác phẩm được nhắc đến như một tiểu thuyết tiêu biểu nhất của văn học nước Nga. Và chính tác phâm này cũng đã mang đến giải...',
            image:"https://www.reader.com.vn/uploads/news/a_1532315184_tieuthuyetsongdongemdem1.jpg",
        },
        {
            id:2,
            title:'Review sách Chiến binh cầu vồng',
            description:'“Chiến binh cầu vồng” là một bức tranh chân thực về xã hội Indonesia truyền cảm hứng sâu sắc về ý nghĩa đích thực của tình bạn, tình thầy...',
            image:'https://www.reader.com.vn/uploads/news/a_1045774569_reviewsachchienbinhcauvong.jpg',

        },
        {
            id:3,
            title:'Review sách Rất thích, rất thích em - Vãn Tình',
            description:'Rất thích, rất thích em giống như một thước phim quay chậm mang độc giả quay lại tháng năm thanh xuân tươi đẹp. Độc giả có thể dễ dàng đồng cảm và bắt...',
            image:'https://www.reader.com.vn/uploads/news/a_1999698434_reviewsachratthichratthichemvantinh1.jpg',
        },
        {
            id:4,
            title:'Review sách Cảm ơn tôi đã đủ dũng cảm - Trương Hạo Thần',
            description:'Cuốn sách “Cảm ơn tôi đã đủ dũng cảm” những câu chuyện về tình yêu, tình bạn, gia đình,… một cuốn sách lưu giữ những tâm sự của tuổi trẻ được cất...',
            image:'https://www.reader.com.vn/uploads/news/a_121524903_sachcamontoidadudungcamtruonghaothan1.jpeg',

        },
        {
            id:5,
            title:' Free Christian Books in PDF - Paul C. Jong’s Christian Book',
            description:' We Must Know That Predestination was Planned within God’s Righteousnessbjnewlife.org',
            image:'https://www.reader.com.vn/uploads/news/a_15046783_harrypotterhondaphuthuy1.jpg',
            
        }
    ],
    
}
const productBookReducer=(state=init,action)=>{
    switch (action.type) {
       case constantBook.FIND_BOOK:{
           console.log(action.payload);
           const bookFind=state.productBookData.filter((list)=>list.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        console.log(bookFind)
           return {...state,bookFind:[...bookFind]}
       }
       case constantBook.GET_BOOK:{
           const book=state.productBookData.find((book)=>book.id==action.payload)
           
           return {...state,bookSelected:!book?[]:book}
       }
       case constantBook.GET_BREAKCRUMB:{
            return {...state,breakCrumbSelected:{...action.payload}}
       }
        default:
            return {...state};
    }
}
export default productBookReducer;