function formataData(datas: Date){
  const data = new Date(datas); 
  const dia = data.getDate().toString().padStart(2, '0'); 
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
  const ano = data.getFullYear(); 
  const dataFormatada = `${dia}/${mes}/${ano}`;
  return dataFormatada;
}

export default function Repositorio(props: any){
  const itens = props.itens;
  console.log(itens);
  return itens.map((item: any, index: number) => {
    const teste = Object.getOwnPropertyNames(item.linguagens);
    const dataFormatada = formataData(item.update)

    return (
      <div key={index} className="repos-item">
        <div className="repos-item-tittle">{item.name}</div>
        <div className="listaLinguagens">
          <ul className="linguagens">
            {teste.map((lingua: string, index: number) => (
              <li key={index}>{lingua}</li>
            ))}
          </ul>
        </div>
        <div className="update">
          <p>Ultima atualização:</p>
          <p className="date">{dataFormatada}</p>
        </div>
        <a href={item.url} target='_blank'><i className="ri-external-link-line"></i></a>
        
      </div>
    );
  });
}
