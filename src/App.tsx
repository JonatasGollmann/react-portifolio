import "@csstools/normalize.css";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./components/Home/Home";
import Icone from "./assets/icon.svg";
import Social from "./components/Social/Social";
import Sobre from "./components/Sobre/Sobre";
import Repositorios from "./components/Repositorios/Repositorios";
import Projetos from "./components/Projetos/Projetos";
import Rodape from "./components/Rodape/Rodape";
import Skills from "./components/Skills/Skills";
import WhiteMode from "./components/WhiteMode/WhiteMode";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <WhiteMode/>
      <Home />
      <div className="main">
        <Social />
        <Sobre Icone={Icone} />
        <Skills />
        <Repositorios/>
        <Projetos/>
        <Rodape Icone={Icone}/>
      </div>
      
    </div>
  );
}

export default App;
