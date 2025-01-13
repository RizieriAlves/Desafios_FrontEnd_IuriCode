/* eslint-disable react/prop-types */
import "../../../../scss/product.scss";

const Product = ({ product }) => {
  return (
    <div className="container">
      <div className="container-image">
        <img
          src={`../../../../images/products/${product.image}.png`}
          alt={`${product.title}`}
        />
      </div>
      <div className="product-info">
        <div className="product-info-texts">
          <span className="product-title">{product.title}</span>
          <span className="product-category">{product.category}</span>
        </div>
      </div>{" "}
      <span className="price">R$ {product.price}</span>
    </div>
  );
};

export default Product;
