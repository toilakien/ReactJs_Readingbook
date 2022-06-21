import BreakCrumb from '../BreakCrumb';
import Sidebar from '../Sidebar/Sidebar';
import {useSelector } from 'react-redux';
function ContentBook() {
    const contentBook=useSelector(state=>state.productBookReducer.bookSelected)
    console.log(contentBook);
    
    return (
        <div className="container mt-5">
            <BreakCrumb />
            <div className="row">
                <div className="col-10">
                    <div className="mt-4 ">TRUYỆN TRANH-VUI NHỘN</div>
                    <div className="card" style={{width: "100%"}}>
                        <img height={"200px"} src={contentBook.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h3 className='card-title'>{contentBook.title}</h3>
                                <p className="card-text">{contentBook.description}</p>
                            </div>
                    </div>
                </div>
                <div className="col-2">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}
export default ContentBook;