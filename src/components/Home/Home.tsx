import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="name">&lt;Jonatas Gollmann /&gt;</div>
        <div className="portifolio">Portifólio</div>
        <div className="desc-portifolio"> FRONT-END DEVELOPER</div>
      </div>
      <div className="mouse">
        <p id='scroll'>scroll down</p>
        <p id='slide'>slide down</p>
        <i className="ri-mouse-line"></i>
        <div className="mouse-linhas">
          <i className="ri-arrow-down-s-line"></i>
          <i className="ri-arrow-drop-down-line"></i>
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </div>
  );
}
