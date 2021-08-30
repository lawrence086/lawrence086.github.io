import React from 'react'
import NewsFeedBanner from '../Banner/NewsfeedBanner';




const Article = ({article}) => {
  console.log("article=====",article)

    return ( <div className="newsArticle">
        <NewsFeedBanner/>
        <div className="articleStructure">
            <div className="Aimgbx">
                <img src={article.multimedia[0].url} alt="" />
            </div>
            <div className="headline">
                <h1>{article.title}</h1>
                <h5>{"by "+article.byline}{" on "}{article.published_date}</h5>
            </div>
            <div className="intro">
                <h4>{article.abstract+" Read more:"} <a href={article.url}>click here</a></h4>
            </div>
        </div>
    </div> );
}
 
export default Article;