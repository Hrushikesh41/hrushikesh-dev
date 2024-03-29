import React from 'react'
import "./ProjectCard.css"

export const ProjectCard = ({coverImg, title, content, tryIt, repo}) => {
    return (
        <>
            <div className='projectApp'>
                <div className='projectImg'>
                    <img src={coverImg} />
                </div>
                <div className='projectTitle'>{title}</div>
                <div className='projectContent'>
                    {content}
                </div>
                <div className='tryIt'>
                    <a href={tryIt}>Try It</a>
                </div>
                <div className='repo'>
                    <a href={repo} target="_blank">GitHub Repo</a>
                </div>
            </div>
        </>

    )
}

export default ProjectCard;