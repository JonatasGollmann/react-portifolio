import "./Social.css";

export default function Social() {
  return (
    <div id="social" className="social-container">
      <div className="tittle">Social</div>

      <div className="social-links">
        <a href="mailto:jonatasgollmann@gmail.com" target='_blank'>
          <i className="social-item ri-mail-fill"></i>
        </a>
        <a href="https://www.linkedin.com/in/jonatas-gollmann/" target="_blank">
          <i className="social-item ri-linkedin-fill"></i>
        </a>
        <a href="https://github.com/JonatasGollmann" target='_blank'>
          <i className="social-item ri-github-fill"></i>
        </a>
      </div>
    </div>
  );
}
