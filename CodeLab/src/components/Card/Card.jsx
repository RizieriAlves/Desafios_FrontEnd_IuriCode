import "./Card.css";
import { useState, useEffect } from "react";

const Card = (post_list) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(post_list);
  }, []);

  function like(i) {
    let newArray = [...posts];
    newArray[i].liked = !newArray[i].liked;
    setPosts(newArray);
  }

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, i) => {
          return (
            <div key={i} className="card">
              <div className="container_Date_Heart">
                <span className="cardDate">{post.date}</span>
                {post.liked ? (
                  <i
                    className="fa-solid fa-heart heart"
                    onClick={() => {
                      like(i);
                    }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart heart"
                    onClick={() => {
                      like(i);
                    }}
                  ></i>
                )}
              </div>
              <div className="text">
                <p className="cardTitle">{post.title}</p>
                <p className="cardText">{post.text}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Sem posts no momento!</h1>
      )}
    </>
  );
};

export default Card;
