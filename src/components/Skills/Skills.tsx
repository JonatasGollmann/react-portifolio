import "./Skills.css";
import svelte from "../../assets/svelte.svg";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="tittle">Skills</div>
      

      <div className="skills-content">
        <div className="linguagens">
          <i className="devicon-react-original"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-svelte-plain"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-html5-plain"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-css3-plain"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-javascript-plain"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-typescript-plain"></i>
        </div>
        <div className="linguagens">
          <i className="devicon-python-plain"></i>
        </div>
      </div>
    </div>
  );
}
