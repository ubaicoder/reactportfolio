import "./Interest.css";
function Interest() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bolder">Interest</h2>
      <div className="row r2 mt-4">
        <div className="col-lg-6">
          <h3 className="fw-bold">Playing Cricket</h3>
          <p>
            I like to play cricket as it is a good sport, and I have been
            playing since my childhood. My father is also a cricketer, which
            encouraged me to develop an interest in cricket. I have also played
            red-ball cricket for one season with the Elite Cricket Club.
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
              MotoGP is a bike racing sport. It is one of the best racing
              sports. My whole family watches the races on weekends. In MotoGP,
              you can see newly upgraded and faster bikes every year. My
              favourite rider is Marc Marquez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Interest;
