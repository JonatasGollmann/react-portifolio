import "./Sobre.css";

export default function Sobre(props: { Icone: string }) {
  return (
    <div className="sobre-container" id="sobre">
      <div className="tittle">Sobre</div>

      <div className="sobre-content">
        <img src={props.Icone} alt="Icone Jonatas" />
        <div className="itens">
          <p className="item">
            Olá! Meu nome é Jonatas, e sou um programador front-end e designer
            UI&UX. Eu trabalho com tecnologias como HTML, CSS e linguagens como
            JavaScript e TypeScript para construir interfaces que sejam
            agradáveis visualmente e fáceis de usar. Tambem trabalho com
            frameworks como Svelte e React, Tailwind e outros. E tambem idealizo
            sites e aplicações como designer.
          </p>
          <p className="item">
            Eu sou um profissional muito organizado, atento aos detalhes e
            apaixonado por programação. Estou sempre em busca de novos desafios
            e oportunidades de aprendizado, esse site foi 100% idealizado por
            mim, da protipação até a organização do site. Com o tempo e
            aprendizado irei adicionando novas funcionalidades e acessibilidade
            ao site.
          </p>
        </div>
      </div>
    </div>
  );
}
