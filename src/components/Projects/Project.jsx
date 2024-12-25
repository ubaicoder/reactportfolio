import "./Project.css";
function Project() {
  return (
    <>
      <h2 className="text-center mt-5 fw-bolder">Projects</h2>
      <div className="container">
        <div className="row r1">
          <div className="col-lg-4 prod">
            <div className="card">
              <div className="card-header">
                <img
                  src="./weather.png"
                  alt="1st project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">Weather Website</h4>
                <p className="text-center">
                  The website shows the weather of the entered location or the
                  current location of the user. Web Technologies Used:
                  HTML,CSS,JavaScript,API
                </p>
                <button className="btn btn-primary" type="button">
                  <a href="https://ubaicoder.github.io/BITask2/">View Site</a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 prod">
            <div className="card">
              <div className="card-header">
                <img
                  src="./resume.png"
                  alt="2nd-project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">Online Resume Builder</h4>
                <p className="text-center">
                  This website developed to make user's experience of creating
                  resumes online in a easier way. Web Technologies Used:
                  HTML,CSS,JavaScript
                </p>
                <button className="btn btn-primary" type="button">
                  <a href="https://ubaicoder.github.io/Coding-Raja-Technologies-Internship/">
                    View Site
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 prod">
            <div className="card">
              <div className="card-header">
                <img
                  src="./card3.jpg"
                  alt="3rd-project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">Boat Clone</h4>
                <p className="text-center">
                  I created the clone website of Boat. While creating this
                  website I knew about different properties of CSS. Web
                  Technologies Used: HTML,CSS,BootStrap
                </p>
                <button className="btn btn-primary">
                  <a href="https://ubaicoder.github.io/clone1/">View Site</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
