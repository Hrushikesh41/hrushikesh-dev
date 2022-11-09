import React from "react";
import "./main.css";
import Resume from "./assets/resume.jpg";
import qrCode from "./assets/qrCode.jpg";
import toDo from "./assets/toDo.jpg";
import weatherly from "./assets/weatherly.jpg";
import blogPost from "./assets/blogPost.jpg";
import getGit from "./assets/getGit.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <>
            
            <div className="main_div">
            {/* <ProjectCard coverImg={Resume} title="Resume Builder" content="Let's You Create Your Resume with provided templates. Also Providing Download Functionality in Pdf Format" tryIt="https://resume-builder-phi.vercel.app/" repo="https://github.com/Hrushikesh41/CodingMaster-Resume-Builder" /> */}
                <div className="card first">
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
                </div>

                {/* QR Code */}
                <div className="card second">
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
                </div>

                {/* weatherly */}
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
                </div>

                {/* Dev Post */}
                <div className="card fourth">
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
                    </div>
                </div>

                {/* GetGit */}
                <div className="card fifth">
                    <div className="card-side front">
                        <div>
                            <img src={getGit} />
                        </div>
                    </div>
                    <div className="card-side back">
                        <div className="text">
                            <div className="title">
                                GetGit
                            </div>
                            <div className="info">Provides you with desired user's GitHub Information .</div>
                            <div className="links">
                                <div className="try">
                                    <a href="https://hrushikesh41.github.io/CodingMaster-GetGit/" target="_blank">Try It</a>
                                </div>
                                <div className="repo">
                                    <a href="https://github.com/Hrushikesh41/CodingMaster-GetGit" target="_blank">GitHub Repo</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Projects;