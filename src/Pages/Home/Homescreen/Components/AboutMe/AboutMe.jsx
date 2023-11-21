import './AboutMe.css';

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/about-me-test1.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section--description">
              I'm a software engineer with focus in iOS development, and I love solving problems and creating solutions while colaborating with multidisciplinary teams. I'm majoring in Computer Science at Federal University of Pernambuco, and there I'm also a part of Apple Developer Academy, where I've grown a lot professionally and personally. 
            </p>
            <p className="hero--section--description">
              I'm eager to learn new things and challenge myself while navigating the never-ending learning path of a software developer. I also have an interest in data-driven fields, since I served as the chief teaching assistant for the Data & Information Management course for almost two years, where I was extensively involved in data engineering.
            </p>
            <p className="hero--section--description">
              On my free time, I enjoy indulging in my hobby of being a music enthusiast. I like to express my music opinions through social media, often sharing album and artist reviews, sometimes with a touch of playful criticism. I also love gaming and spend time with my friends, from whom I'm known for my warm and affectionate nature. I constantly strive to uplift my friends and help them build their self-esteem. 
            </p>
          </div>
        </div>
      </section>
    );
  }