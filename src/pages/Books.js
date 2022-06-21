import BreakCrumb from "../components/BreakCrumb";
import Productbook from "../components/Productbook/Productbook";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
function Books() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="mt-4">
            <BreakCrumb location={location.pathname.replace("/",">")
            }/>
            <div className="row mt-2">
                <Sidebar />
                <div className="col-9">
                    <div className="row mt-2">
                        <h2 style={{fontWeight:"600"}} className="text-center text-uppercase text-dark">List Books</h2>
                    </div>
                    <Productbook />
                    <br />
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Books;