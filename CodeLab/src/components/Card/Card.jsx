/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="container_Date_Heart">
        <span className="cardDate">{data.date}</span>
        {data.liked ? (
          <i className="fa-solid fa-heart heart"></i>
        ) : (
          <i className="fa-regular fa-heart heart"></i>
        )}
      </div>
      <div className="text">
        <p className="cardTitle">{data.title}</p>
        <p className="cardText">{data.text}</p>
      </div>
    </div>
  );
};

export default Card;
