
import React from 'react';
import PropTypes from 'prop-types';
import "./ArticleDetails.css";

function ArticleDetails({ article }) {
  // 
  if (!article) {
    return <div>Select an article to view details</div>;
  }

  return (
        <div className="article-details">
          <p>{article.abstract}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>     
  );
}

ArticleDetails.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleDetails;
