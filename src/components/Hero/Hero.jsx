import "./Hero.css";
function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            className="pics img-fluid"
            src="./first (1).png"
            alt="profile-pic"
            srcset=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 new">
          <h5 className="fw-bolder">Hey, I am</h5>
          <h1>UBAI</h1>
          <h6 className="h5 fw-bolder">Front-End Developer</h6>
          <p className="about-text">
            I’m a Front-End Developer focused on building responsive,
            user-friendly web applications using <span>React</span>, <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>. I enjoy turning ideas into clean, functional interfaces and
            continuously improving my skills through real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
