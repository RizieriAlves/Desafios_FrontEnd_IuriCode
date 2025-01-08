import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  return (
    <>
      <header>
        <p>
          Code<span>Lab</span>
        </p>
        <input type="text" placeholder="Pesquisar no blog" />
      </header>
      <CardContainer />
    </>
  );
}

export default App;
