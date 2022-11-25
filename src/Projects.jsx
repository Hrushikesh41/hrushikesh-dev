import React from "react";
import "./main.css";
import Resume from "./assets/resume.jpg";
import qrCode from "./assets/qrCode.jpg";
import frontify from "./assets/frontify.png"
import FeedSys from "./assets/FeedSys.png"
import codeblogs from "./assets/codeblogs.png"

const Projects = () => {
    return (
        <>

            <div className="main_div">
            <div className="projectCard" id="first">
                <div className="projectImg">
                    <img src={frontify} alt="Nothing to Show" />
                </div>
                <div className="projectDetails">
                    <div className="text">
                        <div className="title">
                            Frontify CLI
                        </div>
                        <div className="info">Frontify is an utility that makes a job of frontend developer much easier and reduces efforts .</div>
                        <div className="links">
                            <div className="repo">
                                <a href="https://github.com/murtuzaalisurti/feedback-management-system" target="_blank">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="projectCard">
                <div className="projectImg">
                    <img src={codeblogs} alt="Nothing to Show" />
                </div>
                <div className="projectDetails">
                    <div className="text">
                        <div className="title">
                            CodeBlogs
                        </div>
                        <div className="info">A Blogging Website where users can create their account, write and read amazing Blogs</div>
                        <div className="links">
                            <div className="try">
                                <a href="https://codeblogshrushikesh.netlify.app/" target="_blank">Try It</a>
                            </div>
                            <div className="repo">
                                <a href="https://github.com/Hrushikesh41/CodeBlogs" target="_blank">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="projectCard">
                <div className="projectImg">
                    <img src={FeedSys} alt="Nothing to Show" />
                </div>
                <div className="projectDetails">
                    <div className="text">
                        <div className="title">
                            Feedback Management System
                        </div>
                        <div className="info">A feedback management system made using MERN stack through which you can collect feedbacks and responses!</div>
                        <div className="links">
                            <div className="try">
                                <a href="https://feedsys.netlify.app/" target="_blank">Try It</a>
                            </div>
                            <div className="repo">
                                <a href="https://github.com/murtuzaalisurti/feedback-management-system" target="_blank">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="projectCard">
                <div className="projectImg">
                    <img src={Resume} alt="Nothing to Show" />
                </div>
                <div className="projectDetails">
                    <div className="text">
                        <div className="title">
                            Resume Builder
                        </div>
                        <div className="info">Let's You Create Your Resume with provided templates. Also Providing Download Functionality in Pdf Format</div>
                        <div className="links">
                            <div className="try">
                                <a href="https://resume-builder-phi.vercel.app/" target="_blank">Try It</a>
                            </div>
                            <div className="repo">
                                <a href="https://github.com/Hrushikesh41/CodingMaster-Resume-Builder" target="_blank">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="projectCard">
                <div className="projectImg">
                    <img src={qrCode} alt="Nothing to Show" />
                </div>
                <div className="projectDetails">
                    <div className="text">
                        <div className="title">
                            QR Code Generator
                        </div>
                        <div className="info">Let's You Create QR Code for given text, links, integers. Also Providing Download Functionality in PNG Format</div>
                        <div className="links">
                            <div className="try">
                                <a href="https://qrcode-generator-dun.vercel.app/" target="_blank">Try It</a>
                            </div>
                            <div className="repo">
                                <a href="https://github.com/Hrushikesh41/qrCode_generator" target="_blank">GitHub Repo</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            </div>

            {/* <div className="main_div"> */}
                {/* <div className="card fifth">
                    <div className="card-side front">
                        <div>
                            <img src={FeedSys} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                Feedback Management System
                            </div>
                            <div className="info">A feedback management system made using MERN stack through which you can collect feedbacks and responses!</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://feedsys.netlify.app/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/murtuzaalisurti/feedback-management-system" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <ProjectCard coverImg={Resume} title="Resume Builder" content="Let's You Create Your Resume with provided templates. Also Providing Download Functionality in Pdf Format" tryIt="https://resume-builder-phi.vercel.app/" repo="https://github.com/Hrushikesh41/CodingMaster-Resume-Builder" /> */}
                {/* <div className="card first">
                    <div className="card-side front">
                        <div>
                            <img src={Resume} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                Resume Builder
                            </div>
                            <div className="info">Let's You Create Your Resume with provided templates. Also Providing Download Functionality in Pdf Format</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://resume-builder-phi.vercel.app/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/Hrushikesh41/CodingMaster-Resume-Builder" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}

                {/* QR Code */}
                {/* <div className="card second">
                    <div className="card-side front">
                        <div>
                            <img src={qrCode} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                QR Code Generator
                            </div>
                            <div className="info">Let's You Create QR Code for given text, links, integers. Also Providing Download Functionality in PNG Format</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://qrcode-generator-dun.vercel.app/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/Hrushikesh41/qrCode_generator" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}

                {/* weatherly
                <div className="card third">
                    <div className="card-side front">
                        <div>
                            <img src={weatherly} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                Weatherly - A Weather Website
                            </div>
                            <div className="info">Provides you with the current Weather of required location.</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://hrushikesh41.github.io/Weatherly-an-weather-web-app/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/Hrushikesh41/Weatherly-an-weather-web-app" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}

                {/* Dev Post */}
                {/* <div className="card fourth">
                    <div className="card-side front">
                        <div>
                            <img src={blogPost} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                Blog Post Retriever for Dev.to
                            </div>
                            <div className="info">Provides you with user Information as well as Blogs of desired user.</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://hrushikesh41.github.io/DEV.to-blog-post-retriever/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/Hrushikesh41/DEV.to-blog-post-retriever" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div> */}
                {/* </div>  */}

                {/* GetGit */}

            {/* </div> */}
        </>
    );
}

export default Projects;