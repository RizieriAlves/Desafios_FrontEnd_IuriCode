/* eslint-disable react/prop-types */
import "../scss/article.scss";
const Article = ({ article }) => {
  return (
    <div className="article">
      <img
        src={`../../images/articles/${article.image}.png`}
        alt={`${article.title}`}
      />
      <div className="article-content">
        <span className="article-title">{article.title}</span>
        <span className="article-text">{article.text}</span>
      </div>
    </div>
  );
};

export default Article;
