import "../../../scss/banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <span className="banner-title">
          <img src="../../../images/logo-jordan.png" alt="Jordan logo" />
          JordanShoes
        </span>
        <div className="banner-content-text">
          <span className="banner-subtitle">A melhor loja de Jordan</span>
          <span className="banner-text">
            O tênis Jordan é fruto de uma velha e forte <br></br>parceria entre
            a Nike e o jogador Michael Jordan.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
