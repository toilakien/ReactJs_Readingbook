import Productbook from "../components/Productbook/Productbook";
import Contact from "./Contact";

function Home() {
    return (
        <div className="container mt-5">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.kstrump.com/wp-content/uploads/2017/01/Book-banner-1.jpg?w=1400" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://theme.hstatic.net/1000173566/1000591201/14/ms_banner_img5.jpg?v=1136" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.kstrump.com/wp-content/uploads/2017/01/Book-banner-1.jpg?w=1400" class="d-block w-100" alt="..." />
                    </div>
                </div>
                
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h2 className="text-center mt-5">Kho sách kenzen </h2>
            <Productbook />
            <hr />
            <Contact />
        </div>
    )
}
export default Home;