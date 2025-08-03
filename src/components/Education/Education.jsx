import "./Education.css";
function Educcation() {
  return (
    <div className="container edu px-4 py-5" id="featured-3">
      <h2 className="text-center pb-2 border-bottom">Education</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img src="./book.svg" alt="book" srcset="" className="img-fluid" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Schooling</h3>
          <p className="text-body-secondary fw-medium">
            Completed SSC from St. Mary's High School, Mazagon.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img src="./book.svg" alt="book" srcset="" className="img-fluid" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Junior College</h3>
          <p className="text-body-secondary fw-medium">
            Completed 11th and 12th (Science stream) from Jai Hind College,
            Churchgate.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-2 mb-3">
            <img src="./book.svg" alt="book" srcset="" className="img-fluid" />
          </div>
          <h3 className="fs-2 text-body-emphasis">Under Graduation</h3>
          <p className="text-body-secondary fw-medium">
            Currently pursuing Bachelor of Technology (B.Tech) in Information
            Technology from Shah & Anchor Kutchhi Engineering College, located
            in Chembur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Educcation;
