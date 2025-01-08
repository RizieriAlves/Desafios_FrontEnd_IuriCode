import Card from "../Card/Card";
import "./CardContainer.css";
const CardContainer = () => {
  const post_list = [
    {
      date: "2024-10-07",
      title: "O que é linguagem de programação? Conheça as principais",
      text: "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
      liked: true,
    },
    {
      date: "2024-06-12",
      title: "GitHub agora permite fazer login sem precisar de senha",
      text: "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
      liked: false,
    },
    {
      date: "2024-06-21",
      title: "Por que os hiperlinks são azuis em sua maioria?",
      text: "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
      liked: false,
    },
  ];

  return (
    <div className="cardContainer">
      <Card post_list={post_list} />
    </div>
  );
};

export default CardContainer;
