
function Sidebar() {
    return (
        <div className="col-3">
            <div className="d-flex flex-column flex-shrink-0 border p-3 text-dark bg-light" style={{ width: "280px", padding: "0" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Danh mục</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-dark" aria-current="page">Sách giáo khoa</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-dark"> Truyện tranh</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-dark"> Truyện ngôn tình</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-dark">Sách lập trình</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-dark">Thêm ....</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;