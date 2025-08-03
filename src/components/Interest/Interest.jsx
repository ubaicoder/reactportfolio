import "./Interest.css";
function Interest() {
  return (
    <div className="container mt-4 int">
      <h2 className="mb-4 text-center fw-bolder">Interest</h2>
      <div className="row r2 mt-4">
        <div className="col-lg-6">
          <h3>Playing Cricket</h3>
          <p>
            I enjoy playing cricket, as it is a great sport, and I’ve been
            playing it since childhood. My father is also a cricketer, which
            inspired me to develop a strong interest in the game. I’ve even
            played red-ball cricket for one season with the Elite Cricket Club.
          </p>
        </div>
        <div className="col-lg-6 re">
          <img
            src="./cricket.jpg"
            alt="cricket"
            srcset=""
            className="img-fluid shadow-lg"
          />
        </div>

        <div className="row mt-4 pt-2 rm">
          <div className="col-lg-6 pb-2">
            <img
              src="./motogp.jpg"
              alt="bike"
              srcset=""
              className="img-fluid shadow-lg"
            />
          </div>
          <div className="col-lg-6">
            <h3>Watching Motogp</h3>
            <p>
              MotoGP is a premier motorcycle racing sport and one of the most
              exciting motorsports in the world. My entire family enjoys
              watching the races together on weekends. Each season, MotoGP
              features newly upgraded and faster bikes, making it thrilling to
              follow. My favourite rider is Marc Márquez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Interest;
