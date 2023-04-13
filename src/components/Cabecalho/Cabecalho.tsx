import "./Cabecalho.css";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav className="barraNav">
        <a className="barraItem" href="#social">Social</a>
        <a className="barraItem" href="#sobre">Sobre</a>
        <a className="barraItem" href="#repositorios">Repositórios</a>
        <a className="barraItem" href="#projetos">Projetos</a>
      </nav>
    </header>
  );
}
