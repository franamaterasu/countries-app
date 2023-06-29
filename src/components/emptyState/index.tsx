import { Link } from "react-router-dom";
import { PiAirplaneLandingBold } from "react-icons/pi";
import "./emptyState.css";

export const EmptyState = (): JSX.Element => {
  return (
    <section className="empty-state">
      <PiAirplaneLandingBold className="empty-state__icon" />
      <p className="empty-state__text">Your whistlist is empty</p>
      <Link to="/" className="btn btn-success">
        Comeback to countries list
      </Link>
    </section>
  );
};
