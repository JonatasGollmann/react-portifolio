import { obtemRepos } from "../../requisicoes";
import Repositorio from "./Repositorio/Repositorio";
import "./Repositorios.css";

const repositorios: object | any = await obtemRepos();
console.log(repositorios)

export default function Repositorios() {
  return (
    <div className="repositorios-container" id="repositorios">
      <div className="tittle">Repositórios</div>

      <div className="repos-content" >
        <Repositorio itens={repositorios} />
        <div className="more-repos-item">
          <a href="https://github.com/JonatasGollmann?tab=repositories">
            <i className="ri-more-2-fill"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
}
