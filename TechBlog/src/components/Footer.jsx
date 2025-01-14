import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>Entre em Contato</span>
        <div className="footer-inputs">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Assunto da mensagem" />
          <button>Entrar em contato</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
