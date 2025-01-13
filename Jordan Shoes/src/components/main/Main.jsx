import "../../../scss/main.scss";
import Product from "./Product/Product";

const Main = () => {
  const products = [
    {
      image: "jordan-1",
      title: "Air Jordan 1 Mid Dutch Green",
      category: "Tênis Air Jordan",
      price: "1.199,99",
    },
    {
      image: "jordan-2",
      title: "Air Jordan 1 High Zoom CMFT Tropical Twist",
      category: "Tênis Air Jordan",
      price: "1.049,00",
    },
    {
      image: "jordan-3",
      title: "Air Jordan 1 Mid Dutch Green",
      category: "Tênis Air Jordan",
      price: "1.350,00",
    },
    {
      image: "jordan-4",
      title: `Air Jordan 1 Mid GS "Light Smoke Grey"`,
      category: "Tênis Air Jordan",
      price: " 1.585,00",
    },
    {
      image: "jordan-5",
      title: "Air Jordan 1 Mid SE Bright Citrus",
      category: "Tênis Air Jordan",
      price: "949,99",
    },
    {
      image: "jordan-6",
      title: "Air Jordan 1 Mid Grey Camo",
      category: "Tênis Air Jordan",
      price: "999,99",
    },
  ];

  return (
    <div className="main">
      <div className="main-texts">
        <div className="main-texts-title">Os melhores em só lugar</div>
        <div className="main-texts-text">
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </div>
      </div>
      <div className="main-products">
        {products.map((product) => {
          return <Product key={product.title} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Main;
