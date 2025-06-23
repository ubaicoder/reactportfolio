import "./Education.css";
function Educcation() {
  return (
    <div className="container c1 px-4 py-5" id="featured-3">
      <h2 className="text-center pb-2 border-bottom">Education</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img
              src="./book.svg"
              alt="book"
              srcset=""
              className="img-fluid"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis fw-bold">Schooling</h3>
          <p className="text-body-secondary fw-medium">
            I have completed my schooling from St Mary's High School(SSC) which is located at Mazagon.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img
              src="./book.svg"
              alt="book"
              srcset=""
              className="img-fluid"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis fw-bold">Junior College</h3>
          <p className="text-body-secondary fw-medium">
            I have done my 11th and 12th in the stream of Science from Jai Hind College which is located at Churchgate.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img
              src="./book.svg"
              alt="book"
              srcset=""
              className="img-fluid"
            />
          </div>
          <h3 className="fs-2 text-body-emphasis fw-bold">Under Graduation</h3>
          <p className="text-body-secondary fw-medium">
            I am pursing my under graduation in B.Tech in the field of Information Technology from Shah And Anchor Kutchhi Engineering College which located in Chembur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Educcation;
