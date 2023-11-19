import './HeroSection.css';

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h2 className="section--title">Hello, I'm a</h2>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software Engineer</span>
            </h1>
            <p className="hero--section--description">
              Hi! My name is Guilherme and I'm your friendly neighborhood tech guy.
              <br /> Welcome to my portfolio! 
            </p>
          </div>
          <div className="hero--section--buttons">
          <a
            href="https://www.linkedin.com/in/gms4"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My LinkedIn Profile
          </a>
          <a
            href="https://drive.google.com/file/d/1UbRGspje9QXYXR-lngUld5aDr4pk15hh/view?usp=share_link"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access My Résumé
          </a>
          </div>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero.png" alt="Hero Section" />
        </div>
      </section>
    );
  }