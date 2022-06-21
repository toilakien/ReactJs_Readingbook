import { useState } from "react";
import { Link } from "react-router-dom";
function FormContact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [feekback,setFeekback]=useState("");
    const objFeedback={};
    const handleSubmit=()=>{
        objFeedback.name=name;
        objFeedback.email=email;
        objFeedback.feekback=feekback;
        alert("Cảm ơn bạn đã gửi phản hồi cho chúng tôi!")
        setEmail("")
        setName("");
        setFeekback("");
        
    }
    
    return (
        <div className="col-md-8 mb-md-0 mb-5 mt-2 border pt-4 pb-4">
            <form  id="contact-form" >
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label htmlFor="name" className>Your name</label>
                            <input onChange={(e)=>setName(e.target.value)} type="text" id="name" name="name" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label htmlFor="email" className>Your email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" id="email" name="email" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <label htmlFor="message"> Feekback Content</label>
                            <textarea onChange={(e)=>setFeekback(e.target.value)} type="text" id="feekback" name="feekback" rows={4} className="form-control md-textarea" defaultValue={""} />
                        </div>
                    </div>
                </div>
            </form>
            <br />
            <div className="text-center text-md-left">
                <Link to='/' onClick={(e)=>handleSubmit(e)} type="submit" className="btn btn-success" > Send this feedback</Link>
            </div>  
            <div className="status" />
        </div>
    )
}
export default FormContact;