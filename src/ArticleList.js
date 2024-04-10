
import React, { useState } from 'react';
import "./ArticleList.css"
import ArticleDetails from './ArticleDetails';
import PropTypes from 'prop-types';


function ArticleList({ articles }) {
  // State for selected article and setter function to change
  const [selectedArticle, setSelectedArticle] = useState(null);

  //  Function to handle click on an article in the list
  const handleArticleClick = (article) => {
    if (selectedArticle === article) {
      setSelectedArticle(null); // Toggle off if the same article is clicked again
    } else {
      setSelectedArticle(article); // Set selected article
    }
  };

  return (
    <div className="article-list">
      <ul>
        {articles ? articles.map((article) => (
          <li key={article.id} className="article-item" onClick={() => handleArticleClick(article)}>
            <h3>{article.title}</h3>
            {selectedArticle === article && <ArticleDetails article={selectedArticle} />  }
          </li>
        )):""}
      </ul>
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};
export default ArticleList;

