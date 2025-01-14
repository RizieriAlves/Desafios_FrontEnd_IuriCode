import "../scss/header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-text">
          <span className="header-text-title">
            Encontre os <span>melhores artigos </span>
            de programação em um só lugar
          </span>
          <span className="header-text-subtitle">
            Explore o topo da programação em um só lugar! Seu destino único para
            dicas e tendências atuais.
          </span>
          <button className="header-text-button">BUSCAR ARTIGOS</button>
        </div>
        <img
          src="../../images/headerimage.png"
          alt="Pessoa feliz no computador"
        />
      </div>
    </div>
  );
};

export default Header;
