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
             
                <h4 className="atag" id="bottom">Facebook <a className="atag" href="https://www.linkedin.com/in/wadih-ojeil/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i></a> </h4><br/>
                <h4 className="atag">Instagram<a className="atag" href="https://github.com/wojeil" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></h4><br/>
                <h4 className="atag">Email:<a className="atag" href= "mailto: wadih.ojeil@gmail.com"> wadih.ojeil@gmail.com</a></h4><br/>
                <h4 className="atag">Phone Number: +1(407)463-6548</h4><br/>
               
                                        
            </div>
        </div>
        </>

    )
}

export default ContactCard;