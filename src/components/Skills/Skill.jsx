import "./Skill.css";
function Skill() {
  return (
    <>
      <h2 className="text-center fw-bolder">Skills</h2>
      <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center sk">
        <div className="list-group">
          <a
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Programming Languages</h6>
                <p className="mb-0 opacity-75">Java, C Programming.</p>
              </div>
            </div>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Web Development</h6>
                <p className="mb-0 opacity-75">HTML, CSS, JavaScript, React.</p>
              </div>
            </div>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Tools & IDEs</h6>
                <p className="mb-0 opacity-75">
                  Visual Studio Code, IntelliJ IDEA.
                </p>
              </div>
            </div>
          </a>
          <a
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              className="rounded-circle flex-shrink-0"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">FrameWorks</h6>
                <p className="mb-0 opacity-75">BootStrap, Expressjs.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Skill;
