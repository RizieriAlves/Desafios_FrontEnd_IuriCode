import "../scss/Main.scss";
import Article from "./Article";

const Main = () => {
  const articles = [
    {
      image: "image",
      title: "O que é linguagem de programação? Conheça as principais",
      text: "Uma das mais populares vertentes da tecnologia da informação, a área de...",
    },
    {
      image: "image2",
      title:
        "Python: por que a linguagem é tão usada para Data Science e finanças?",
      text: "O mundo da programação conta com algumas opções de linguagem para...",
    },
    {
      image: "image3",
      title: "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários",
      text: "O popular serviço de repositório de código GitHub foi adquirido pela...",
    },
    {
      image: "image4",
      title: "15 comandos no GIT que os desenvolvedores precisam saber",
      text: "Dominar os comandos GIT é uma habilidade que se conquista com...",
    },
    {
      image: "image5",
      title: "GIT e GitHub: o que são e quais as diferenças entre eles?",
      text: "Git e GibHub são dois softwares de controle de versão essenciais para...",
    },
    {
      image: "image6",
      title:
        "GitHub Copilot ganha integração com GPT-4 e interface conversacional",
      text: "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...",
    },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <span className="container-content-title">Artigos recomendados</span>
        <div className="container-content-articles">
          {articles.map((article) => {
            return <Article article={article} key={article.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
