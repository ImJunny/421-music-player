import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="navlink">
        Home
      </NavLink>
      <NavLink to="/player" className="navlink">
        Player
      </NavLink>
    </div>
  );
}
