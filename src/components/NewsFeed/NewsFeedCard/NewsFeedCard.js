import React from "react";
// import img from "../../../images/banner.jpg";
// import art from "../../../images/article.jpeg";
import { Link } from "react-router-dom";

const NewsFeedCard = ({ article,getArticle }) => {

  return (
    <Link to={"/newsfeed/" + article.abstract} className="NewsFeedCard" onClick={()=>getArticle(article)}>
      <div>
        <div className="imgbx">
          <img src={article.multimedia[0].url} alt="img" />
        </div>
        <div className="info">
          <h3>{article.byline}</h3>
          <p>{article.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsFeedCard;