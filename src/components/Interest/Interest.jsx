import "./Interest.css";
function Interest() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bolder">Interest</h2>
      <div className="row r2 mt-4">
        <div className="col-lg-6">
          <h3 className="fw-bold">Playing Cricket</h3>
          <p>
            I like to play Cricket as it is a good sports and i have played
            since my childhood. Also my father is cricketer that incourage me to
            have interest in playing cricket. I have also played red ball
            cricket for one season with Elite Cricket Club.
          </p>
        </div>
        <div className="col-lg-6 re">
          <img
            src="./cricket.jpg"
            alt="cricket"
            srcset=""
            className="img-fluid"
          />
        </div>

        <div className="row mt-4 pt-2 rm">
          <div className="col-lg-6 pb-2">
            <img
              src="./motogp.jpg"
              alt="bike"
              srcset=""
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold">Watching Motogp</h3>
            <p>
              Motogp is bike racing sport.It is the one of the best racing
              sport.My whole family watches this race on weekends.In this you
              can see new upgraded faster bike every year.In this my favourite
              rider is Marc Marquez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Interest
