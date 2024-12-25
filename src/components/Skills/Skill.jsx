import "./Skill.css";
function Skill() {
  return (
    <>
      <h2 className="text-center fw-bolder">Skills</h2>
      <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <div class="list-group">
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Programming Languages</h6>
                <p class="mb-0 opacity-75">Python, C programming.</p>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Web Development</h6>
                <p class="mb-0 opacity-75">HTML, CSS, JavaScript, React.</p>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">Tools & IDEs</h6>
                <p class="mb-0 opacity-75">
                  Visual Studio Code, IntelliJ IDEA.
                </p>
              </div>
            </div>
          </a>
          <a
            class="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="./images.png"
              alt="twbs"
              width="32"
              height="32"
              class="rounded-circle flex-shrink-0"
            />
            <div class="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 class="mb-0">FrameWorks</h6>
                <p class="mb-0 opacity-75">BootStrap, Expressjs.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Skill;
