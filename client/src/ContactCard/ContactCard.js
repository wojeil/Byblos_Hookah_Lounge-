import React from "react";
import "./ContactCard.css";



function ContactCard (){
    return(
        <>
        <div className="card contact-card">
            <div className="card-header">
                <h3>Contact Us</h3>
            </div>

            <div className="card-body">
             
                <h4 className="atag">Facebook: <a className="atag" href="https://www.facebook.com/bybloshookah/" target="_blank" rel="noopener noreferrer"> bybloshookah <i className="fab fa-facebook-square"></i></a> </h4><br/>
                <h4 className="atag">Instagram: <a className="atag" href="https://www.instagram.com/bybloshookahloungeucf/" target="_blank" rel="noopener noreferrer"> bybloshookahloungeucf <i className="fab fa-instagram"></i></a></h4><br/>
                <h4 className="atag">Email:<a className="atag" href= "mailto: bybloshookahlounge@hotmail.com"> bybloshookahlounge@hotmail.com</a></h4><br/>
                <h4 className="atag">Phone Number:<a className="atag" href="tel:+14075421188">+1(407) 542-1188</a> </h4><br/>
               
                                        
            </div>
        </div>
        </>

    )
}

export default ContactCard;