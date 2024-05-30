import React from "react";
import image from "./assets/image.jpg";
// /Users/hrushikeshkokardekar/Developer/hrushikesh-dev/src/assets/image.jpg
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="contacts">
                    <div className="linkedIN">
                        <a href="https://www.linkedin.com/in/hrushikesh-kokardekar-7b84b0213/" target="_blank"><i class="fa fa-2x fa-linkedin-square"></i></a>

                    </div>
                    <div className="insta">
                        <a href="https://www.instagram.com/hrushi.1811/?hl=en" target="_blank"> <i class="fa fa-2x fa-instagram"></i></a>

                    </div>
                    <div className="email">
                        <a href="mailto:hrushikesh.kok@gmail.com"><i class="fa fa-2x fa-envelope-o"></i></a>

                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/HrushikeshKok" target="_blank"> <i class="fa fa-2x fa-twitter-square"></i></a>

                    </div>
                    <div className="github">
                        <a href="https://github.com/Hrushikesh41" target="_blank"><i class="fa fa-2x fa-github"></i></a>

                    </div>
                </div>
                <div className="inner_div">
                    <div className="image">
                        <div className="profile">
                            <img src={image} alt="Image" />
                        </div>
                    </div>
                    <div className="desc">
                        <div className="p1">Hey Folks, </div>
                        <div className="p2">I am Hrushikesh Kokardekar</div>
                        <div className="p3">A Full Stack Web Developer who likes to create Awesome Websites</div>
                        <div className="p4">
                            <a href="https://drive.google.com/file/d/14LqNCeArx0CRM3iL_FK-5I6c6M2cqRSK/view?usp=drive_link" target="_blank">Check Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;