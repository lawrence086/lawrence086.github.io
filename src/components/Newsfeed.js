import React from 'react'
import '../Css/feed.css';

const Newsfeed = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-item">
            <img className="news-img" src={urlToImage} alt=""/>
            <div className="content">
            <h3 className="links">
                <a className="info" href={url}>{title}</a>
            </h3>
            <p className="desc">{ description }</p>
            </div>
        </div>
    )
}

export default Newsfeed
