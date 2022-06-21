import {Link}from 'react-router-dom';
import { useDispatch } from 'react-redux';
import *as actions from '../../redux/actions/actionBooks';
function ProductbookItem({data}) {
    const dispatch=useDispatch();
    const getBooks=(id)=>{
        dispatch(actions.getBook(id))
    }
    

    return (
        <div className="card" style={{ width: "17rem" }}>
            <img src={data.image} className="card-img-top" alt={data.title} />
            <div className="card-body">
                <h5 style={{fontWeight:"600"}} className="card-title text-dark">{data.title}</h5>
                <p style={{fontWeight:"500"}} className=" h6 text-card text-secondary">{data.description}</p>
                <Link to="/books/content" onClick={()=>{ console.log(data.id); getBooks(data.id)}} className="btn btn-primary">Reading</Link>
            </div>
        </div>
    )
}
export default ProductbookItem;