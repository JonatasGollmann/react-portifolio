import './Rodape.css';

export default function Rodape(props: {Icone: string}){
    return(
        <div className="rodape-container">
            
            <div className="rodape-content">
            <img src={props.Icone}></img>
                <div className="text">
                    <div className="text-inicial">Aberto para trabalhos</div>
                    <div className="text-secund">Vamos trabalhar juntos?</div>
                </div>
                
                <a className='contact-button' href='mailto:jonatasgollmann@gmail.com'>
                    <p>Contato</p>
                    <i className="ri-mail-line"></i>
                </a>
            </div>

        </div>
    )
}