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
                        Ch??o m???ng qu?? ?????c gi??? ?????n v???i kenzen.vn - S??ch Hay N??n ?????c - Review S??ch - K???t N???i v?? Lan To??? Tri Th???c!
                    </p>
                </section>
                <section className="">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Top s??ch hay</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">S??ch khoa h???c</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">S??ch truy???n</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Ch??m ng??n</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">S??ch v???t l??</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Review s??ch</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">S??ch v??n h???c</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">S??ch to??n h???c</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">S??ch sinh hoc</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">S??ch n??ng cao</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">T??c gi??? t??c ph???m</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">V??n cao</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Nguy???n ????nh Thi</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">H??? Xu??n H????ng</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">T??? H???u</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Blog t???ng h???p</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Qu?? t???ng cu???c s???ng</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Tr??ch d???n hay ?? ngh??a</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Ngh??? thu???t s???ng</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">G??c suy ng???m</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                ?? 2020 Copyright:&nbsp;
                <a className="text-white" href="Kienle17042001@gmail.com">Kienle17042001@gmail.com</a>
            </div>
        </footer>
    )
}
export default Footer;