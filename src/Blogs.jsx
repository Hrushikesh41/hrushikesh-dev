import React, { useEffect, useState } from "react";
import "./main.css";

const Blogs = () => {
    const [blog, setBlog] = useState([]);


    useEffect(() => {
        const fectBlog = async () => {
            const link = "https://dev.to/api/articles?username=hrushikesh41";
            const response = await fetch(link);
            const resJson = await response.json();

            setBlog(resJson);
        }

        fectBlog();
    }, []);


    return (
        <>
            <div className="blogContainer">
                {blog.map((element, index) => {
                    var tags = element.tag_list;
                    return (
                        <>
                            <div className="blog">
                                <div className="coverImge">
                                    <img src={element.cover_image} />
                                </div>
                                <div className="title">
                                    {element.title}
                                </div>
                                <div className="details">
                                    <div className="publish">
                                        <i>{element.readable_publish_date}</i>
                                    </div>

                                    <div className="tags">
                                        {tags.map((element, index) => {
                                            return (
                                                <>

                                                    <div className={"tag" + index}>
                                                        #{element}
                                                    </div>

                                                </>
                                            )
                                        })}
                                    </div>

                                </div>
                                <div className="desc">
                                    {element.description}
                                </div>
                                <div className="url">
                                    <a href={element.url} target="_blank">Read More</a>
                                </div>

                            </div>
                        </>
                    )
                })}

            </div>


        </>
    );
}

export default Blogs