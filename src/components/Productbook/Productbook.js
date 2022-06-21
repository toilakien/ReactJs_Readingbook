import ProductbookItem from "./ProductbookItem";
import { useSelector } from "react-redux";

function Productbook() {
    const productBookData=useSelector(state=>state.productBookReducer.productBookData);
    const productbookFind=useSelector(state=>state.productBookReducer.bookFind);
    console.log(productbookFind);
    return (
        <div className="row mt-2">
            
            {productbookFind?productbookFind.map((data,index)=>{
                return (
                    <ProductbookItem 
                    key={index}
                    data={data}
                    />
                )
            }):productBookData.map((data,index)=>{
                return (
                    <ProductbookItem 
                    key={index}
                    data={data}
                    />
                )
            })}
            
        </div>
    )
}
export default Productbook;