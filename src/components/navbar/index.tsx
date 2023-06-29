import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import "./navbar.css";

export const Navbar = (): JSX.Element => {
  const { whistlist } = useSelector((state) => state.countries);

  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="header__logo navbar-brand">
          <MdOutlineAirplaneTicket className="header__logo-img" />
          <div className="header__logo-text">My Travel App</div>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/whistlist" className="nav-link position-relative">
                My whistlist
                <span className="badge bg-secondary position-absolute top-0 start-10 translate-middle">
                  {whistlist.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
