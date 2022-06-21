import BreakCrumb from "../components/BreakCrumb";
import FormContact from "../components/FormContact";
import { useLocation } from "react-router-dom";
function Contact() {
    
        const location = useLocation();
        
      
    
    return (
        <div className=" container mt-5">
            <BreakCrumb location={location.pathname.replace("/",">")}/>
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">
            Bạn có câu hỏi nào không? Xin vui lòng liên hệ trực tiếp với chúng tôi. Nhóm của chúng tôi sẽ quay lại với bạn trong vòng vài giờ để giúp bạn.</p>
                <div className="row">
                    <FormContact/>
                    <div className="col-md-4 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x" />
                                <p>San Francisco, CA 94126, USA</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x" />
                                <p>+ 0386785259</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x" />
                                <p>Kienle17042001@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
    }
    export default Contact;