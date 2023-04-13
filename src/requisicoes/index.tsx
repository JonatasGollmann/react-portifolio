import { obtemLinguagens, obtemRepositorios } from "./conexaoRepositorios";
import { IRepositorios } from "./IRepositorios";

export async function obtemRepos() {
  const dadosRepos = await obtemRepositorios();
  if (dadosRepos.ok) {
    const dadosReposJson: object[] = await dadosRepos.json();

    const dados = await Promise.all(dadosReposJson.map(
      async (dadoRepos: object | any)=> {
        const linguagens = await obtemLinguagens(dadoRepos.languages_url);
        if (linguagens.ok) {
          const linguagensJson: object[] = await linguagens.json();
          const dados = formataData(dadoRepos, linguagensJson);          
          return dados
        } else {
          throw new Error(
            "Erro ao conectar a API Github. Function ObtemLinguagens"
          );
        }      
      }
    ));
    return dados;
  } else {
    throw new Error("Erro ao conectar a API Github. Function ObtemRepos");
  }
}

function formataData(dado: object | any, linguagens: any): IRepositorios {
  const dados: IRepositorios = {
    id: dado.id,
    name: dado.name,
    linguagens: linguagens,
    update: dado.updated_at,
    url: dado.html_url,
  };

  return dados;
}
