import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Newsfeed from './Newsfeed';

const NewsList = ({newsItem}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=313b30e3e8144a21a9062c33e9b82c4d");
        
            setArticles(res.data.articles);
            console.log(res);
        }
        getArticles();
    }, []);

    return (
        <div className="newsCard">
            <h2 className="card-header">Top stories</h2>
            {articles.map(({title, description, url, urlToImage}) => (
                <Newsfeed title={title} description={description} url={url} urlToImage={urlToImage} />
            ))}  
        </div>
    );
};

export default NewsList
