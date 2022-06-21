function Footer() {
    return (
        <footer className="bg-dark text-center text-white mt-2">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
                </section>
                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">

                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example21" className="form-control" />
                                    <label className="form-label" htmlFor="form5Example21">Email address</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                    Subscribe
                                </button>
                            </div>

                        </div>
                    </form>
                </section>
                <section className="mb-4">
                    <p>
                        Chào mừng quý độc giả đến với kenzen.vn - Sách Hay Nên Đọc - Review Sách - Kết Nối và Lan Toả Tri Thức!
                    </p>
                </section>
                <section className="">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Top sách hay</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Sách khoa học</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sách truyện</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Châm ngôn</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sách vật lý</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Review sách</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Sách văn học</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sách toán học</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sách sinh hoc</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Sách nâng cao</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Tác giả tác phẩm</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Văn cao</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Nguyễn Đình Thi</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Hồ Xuân Hương</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Tố Hữu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Blog tổng hợp</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Quà tặng cuộc sống</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Trích dẫn hay ý nghĩa</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Nghệ thuật sống</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Góc suy ngẫm</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:&nbsp;
                <a className="text-white" href="Kienle17042001@gmail.com">Kienle17042001@gmail.com</a>
            </div>
        </footer>
    )
}
export default Footer;