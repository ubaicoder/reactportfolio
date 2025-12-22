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
                  src="./banking.png"
                  alt="1st project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">💳Banking Web App</h4>
                <p className="text-center">
                  A full-stack banking system to manage deposits, withdrawals,
                  and view transactions in real time. Built with React, Node.js,
                  Express, and MySQL, with a responsive UI and secure REST APIs.
                </p>
                <div className="text-center mt-2 mb-2">
                  <span className="badge bg-primary me-1">React</span>
                  <span className="badge bg-success me-1">Node.js</span>
                  <span className="badge bg-dark me-1">Express</span>
                  <span className="badge bg-warning text-dark me-1">MySQL</span>
                  <span className="badge bg-info text-dark">Bootstrap</span>
                </div>

                <button className="btn btn-primary" type="button">
                  <a href="https://frontend-nb.onrender.com">View Site</a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 prod">
            <div className="card">
              <div className="card-header">
                <img
                  src="./kicks.png"
                  alt="2nd-project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">👟 Kicks - Shoe Store </h4>
                <p className="text-center">
                  A responsive frontend e-commerce platform for browsing and
                  purchasing shoes. Built with React and styled using Bootstrap,
                  it supports category-based filtering (Men, Women, Sneakers,
                  Sports). Features include cart management via React Context
                  API, Razorpay payment integration, and OAuth-based user
                  authentication. Scalable for future backend expansion with
                  Node.js and MongoDB.
                </p>
                <div className="text-center mt-2 mb-2">
                  <span className="badge bg-primary me-1">React</span>
                  <span className="badge bg-success me-1">Redux</span>
                  <span className="badge bg-info text-dark">Bootstrap</span>
                </div>

                <button className="btn btn-primary" type="button">
                  <a href="https://github.com/ubaicoder/kicks-shoep.git">
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 prod">
            <div className="card">
              <div className="card-header">
                <img
                  src="./dental.jpg"
                  alt="3rd-project"
                  srcset=""
                  className="pic"
                />
              </div>
              <div className="card-body">
                <h4 className="text-center">🏥 Dental Mangement System</h4>
                <p className="text-center">
                  A Second Year Engineering Mini Project developed using Django
                  to streamline dental clinic operations such as appointment
                  booking, conflict handling, and prescription management. I
                  contributed to the frontend development, focusing on
                  responsive UI and user-friendly patient and doctor interfaces
                  with secure email/OTP verification.
                </p>
                <div className="text-center mt-2 mb-2">
                  <span className="badge bg-primary me-1">HTML</span>
                  <span className="badge bg-success me-1">CSS</span>
                  <span className="badge bg-warning text-dark me-1">
                    Django
                  </span>
                </div>

                <button className="btn btn-primary">
                  <a href="https://dentalclinicsystem.onrender.com/">View Site</a>
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
