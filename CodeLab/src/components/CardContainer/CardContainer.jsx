import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = () => {
  const posts = [{}];

  return (
    <div className="cardContainer">
      {posts > 0 ? (
        posts.map((post, i) => {
          return <Card data={post} key={i} />;
        })
      ) : (
        <h1>Sem posts no momento!</h1>
      )}
    </div>
  );
};

export default CardContainer;
