import "./Nav.css";
import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from 'react-bootstrap';
function Navigation() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand fs-4" to="/"><img src="./ubai.png" alt="" className="logopic" /></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Interest">
              Intrest
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navigation;
