import React from "react";
import "./main.css";


const Contact = () => {
    return (
        <>
            <div className="contactMe">
                <p>Let's Get in Touch </p>
                <div className="icons">
                    <div className="linkedIN">
                        <a href="https://www.linkedin.com/in/hrushikesh-kokardekar-7b84b0213/" target="_blank"><i class="fa fa-3x fa-linkedin-square"></i></a>

                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/hrushi.1811/?hl=en" target="_blank"> <i class="fa fa-3x fa-instagram"></i></a>

                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/HrushikeshKok" target="_blank"> <i class="fa fa-3x fa-twitter-square"></i></a>

                    </div>
                    <div className="github">
                        <a href="https://github.com/Hrushikesh41" target="_blank"><i class="fa fa-3x fa-github"></i></a>

                    </div>
                </div>

                <div className="mail">
                    <div className="email">
                        <i class="fa fa-3x fa-envelope-o"></i>

                    </div>
                    <div className="emailID">Mail me at <a href="mailto:hrushikesh.kok@gmail.com">hrushikesh.kok@gmail.com</a></div>
                </div>
            </div>
        </>
    );
}

export default Contact;